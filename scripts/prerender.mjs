import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const ssrDir = path.join(rootDir, '.ssr')
const htmlPath = path.join(distDir, 'index.html')

async function findSsrEntry(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const nested = await findSsrEntry(fullPath)

      if (nested) {
        return nested
      }

      continue
    }

    if (
      entry.isFile() &&
      entry.name.startsWith('entry-server.') &&
      /\.(js|mjs|cjs)$/.test(entry.name)
    ) {
      return fullPath
    }
  }

  return null
}

async function removeClientRuntime(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        await removeClientRuntime(fullPath)
        return
      }

      if (/\.(js|mjs|cjs|map)$/i.test(entry.name)) {
        await fs.rm(fullPath, { force: true })
      }
    }),
  )
}

async function prerender() {
  const ssrEntry = await findSsrEntry(ssrDir)

  if (!ssrEntry) {
    throw new Error('SSR entry bundle was not found in .ssr')
  }

  const { render } = await import(`${pathToFileURL(ssrEntry).href}?t=${Date.now()}`)

  if (typeof render !== 'function') {
    throw new Error('SSR entry does not export a render() function')
  }

  const appHtml = render()
  const preloadLinks = appHtml.match(/<link\b[^>]*rel="preload"[^>]*\/?>/g) ?? []
  const renderedMarkup = appHtml.replace(/<link\b[^>]*rel="preload"[^>]*\/?>/g, '')
  let html = await fs.readFile(htmlPath, 'utf8')

  if (!html.includes('<!--app-html-->')) {
    throw new Error('Missing <!--app-html--> placeholder in built index.html')
  }

  html = html.replace('<!--app-html-->', renderedMarkup)
  html = html.replace(/<script\b[^>]*type="module"[^>]*><\/script>\s*/g, '')
  html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>\s*/g, '')

  if (preloadLinks.length > 0) {
    html = html.replace('</head>', `  ${preloadLinks.join('\n  ')}\n</head>`)
  }

  await fs.writeFile(htmlPath, html)

  const assetsDir = path.join(distDir, 'assets')
  await removeClientRuntime(assetsDir)
  await fs.rm(ssrDir, { recursive: true, force: true })
}

prerender().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
