import { twJoin } from 'tailwind-merge'

import { AssetIcon } from './components/AssetIcon'
import { SectionBlock } from './components/SectionBlock'
import { experience, links, pillars } from './data'

function App() {
  return (
    <main className="text-text-primary mx-auto my-10 grid min-h-screen max-w-6xl gap-6 px-4">
      <section
        className={twJoin(
          'rounded-main grid gap-6 border border-border-subtle',
          'bg-surface p-6',
          'lg:grid-cols-3 lg:gap-12',
        )}
      >
        <div className="grid content-center lg:col-span-2">
          <p className="text-text-muted text-xs tracking-wide uppercase">
            Lead Frontend Engineer
          </p>
          <h1 className="text-text-primary mt-3 text-5xl leading-none font-semibold md:text-7xl lg:text-8xl">
            Maksym Riahuzov
          </h1>
          <p className="text-text-secondary mt-6 max-w-xl text-xl leading-8 lg:text-2xl">
            Building scalable frontend systems with React, TypeScript, strong
            architecture, and delivery discipline.
          </p>
          <p className="text-text-muted mt-4 max-w-xl text-base leading-7">
            Focused on frontend architecture, design systems, performance,
            custom SSR, CI/CD, and the kind of technical leadership that
            improves how teams ship.
          </p>
        </div>

        <aside
          className="mx-auto grid h-fit max-w-xs justify-items-center gap-4"
          aria-label="Profile photo"
        >
          <div
            className={twJoin(
              'relative h-64 w-56 max-w-full overflow-hidden',
              'rounded-main border border-border-control',
            )}
          >
            <img
              className="block h-full w-full object-cover object-center"
              src="main-avatar.png"
              alt="Portrait of Maksym Riahuzov"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <p className="text-text-muted text-center text-xs tracking-wide uppercase">
            Technical leadership with a strong UI and product engineering bias.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <AssetIcon key={link.label} {...link} />
            ))}
          </div>
        </aside>
      </section>

      <SectionBlock
        id="summary-title"
        label="Summary"
        title="Quiet, technical, recruiter-friendly."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item}
              className={twJoin(
                'text-text-secondary rounded-main border border-border-subtle',
                'bg-surface-raised p-4',
              )}
            >
              <p>{item}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="experience-title"
        label="Experience"
        title="Recent record"
      >
        <div className="grid gap-3">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className={twJoin(
                'rounded-main grid gap-4',
                'border border-border-subtle bg-surface-raised',
                'p-4 md:grid-cols-4',
              )}
            >
              <span className="text-text-muted md:col-span-1">
                {item.period}
              </span>
              <div className="md:col-span-3">
                <h3 className="text-text-primary m-0 text-lg leading-6 font-medium">
                  {item.role}
                </h3>
                <p className="text-text-muted mt-2 mb-3">
                  {item.company}
                </p>
                <p className="text-text-secondary">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

        <footer
          className={twJoin(
            'rounded-main flex flex-col justify-between gap-3',
            'border border-border-subtle bg-surface',
            'px-4 py-3 md:flex-row',
          )}
        >
        <p>Spain, Remote</p>
        <p>maxryaguzov@gmail.com</p>
      </footer>
    </main>
  )
}

export default App
