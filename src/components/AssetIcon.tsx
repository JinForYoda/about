import type { ComponentPropsWithoutRef, ComponentType } from 'react'
import { twMerge } from 'tailwind-merge'

type AssetIconTone = 'github' | 'linkedin' | 'email' | 'cv'

type AssetIconProps = {
  href: string
  label: string
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>
  tone: AssetIconTone
  external?: boolean
}

const toneClasses: Record<AssetIconTone, string> = {
  github: 'hover:border-brand-github hover:text-brand-github',
  linkedin: 'hover:border-brand-linkedin hover:text-brand-linkedin',
  email: 'hover:border-brand-email hover:text-brand-email',
  cv: 'hover:border-brand-cv hover:text-brand-cv',
}

export function AssetIcon({
  href,
  label,
  icon: Icon,
  tone,
  external = true,
}: AssetIconProps) {
  return (
    <a
      className={twMerge(
        'inline-flex h-11 w-11 items-center justify-center',
        'rounded-full border border-border-control',
        'bg-transparent text-border-control',
        'transition-colors duration-300 ease-out',
        toneClasses[tone],
      )}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  )
}
