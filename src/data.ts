import { CvIcon, EmailIcon, GitHubIcon, LinkedInIcon } from './components/icons'

export const pillars = [
  'Frontend architecture for products that need long-term structure.',
  'React, TypeScript, Next.js, and backend-integrated delivery.',
  'Design systems, shared UI foundations, and scalable web systems.',
  'Performance, CI/CD, legacy modernization, mentoring, and quality ownership.',
]

export const experience = [
  {
    period: '2024 — now',
    role: 'Frontend Team Lead',
    company: 'Systeme.io',
    text: 'Technical direction, monorepo architecture, product trade-offs, mentoring, and delivery efficiency.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Systeme.io',
    text: 'Frontend and full-stack foundations with React, Next.js, and NestJS plus modernization and performance work.',
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'FONBET Cyprus',
    text: 'Large internal product sections, cross-browser delivery, and work inside a complex legacy environment.',
  },
]

export const links = [
  {
    href: 'https://github.com/JinForYoda',
    label: 'GitHub',
    icon: GitHubIcon,
    tone: 'github',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/maxryaguzov',
    label: 'LinkedIn',
    icon: LinkedInIcon,
    tone: 'linkedin',
    external: true,
  },
  {
    href: 'mailto:maxryaguzov@gmail.com',
    label: 'Email',
    icon: EmailIcon,
    tone: 'email',
    external: false,
  },
  {
    href: 'CV.pdf',
    label: 'CV',
    icon: CvIcon,
    tone: 'cv',
    external: true,
  },
] as const
