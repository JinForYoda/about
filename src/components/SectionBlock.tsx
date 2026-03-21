import type { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

type SectionBlockProps = {
  id: string
  label: string
  title: string
  children: ReactNode
}

export function SectionBlock({ id, label, title, children }: SectionBlockProps) {
  return (
    <section
      className={twJoin(
        'grid gap-4 rounded-main',
        'border border-border-subtle bg-surface',
        'p-6',
      )}
      aria-labelledby={id}
    >
      <div className="grid gap-2">
        <p className="text-text-muted text-xs uppercase tracking-wide">
          {label}
        </p>
        <h2 id={id} className="text-text-primary mt-3 text-3xl font-semibold leading-none md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
