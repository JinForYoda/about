import { CvIcon, EmailIcon, GitHubIcon, LinkedInIcon } from './components/icons'

export const pillars = [
  'Operating at senior level with lead-level ownership across 3 production applications and 7-8 shared libraries.',
  'Built a microfrontend monorepo with reusable i18n, shared UI, and shared business logic across 28 languages.',
  'Reduced bundle size by 3x while improving the structure and reuse of the shared frontend platform.',
  'Can take a product area from architecture to AWS delivery and production support without handoffs.',
]

export const impact = [
  {
    title: 'Product Scale',
    text: 'Built and maintained frontend systems used across a product with a customer base close to one million.',
  },
  {
    title: 'White-Label Platform',
    text: 'Built a brand-agnostic theming layer with configurable tokens and assets, making white-label rollout scalable instead of manual.',
  },
  {
    title: 'Delivery Ownership',
    text: 'Owned delivery from code to production, including AWS infrastructure and selective monorepo deployments based on changed modules.',
  },
  {
    title: 'Editor Migration',
    text: 'Led the DraftJS to TipTap migration with full visual compatibility and data migration, allowing the old editor stack to be fully retired.',
  },
]

export const systems = [
  {
    title: 'Monorepo and Microfrontend Platform',
    text: 'Created and curated the monorepo for product microfrontends, with reusable platform modules, shared i18n across 28 languages, and a cleaner foundation for scaling teams and features.',
  },
  {
    title: 'White-Label and Design System',
    text: 'Separated branding from business logic with a unified design system and a scalable white-label model for assets, themes, and product presentation.',
  },
  {
    title: 'Editor Platform on TipTap',
    text: 'Built and maintained a full text editor on TipTap with custom product workflows, complex content behavior, and extensions tailored to product needs.',
  },
  {
    title: 'Fullstack SSR Application',
    text: 'Built a React and NestJS application from scratch with custom SSR, shared contracts, and a lean page delivery model for public-facing experiences.',
  },
  {
    title: 'AWS Delivery Platform',
    text: 'Built and maintained the delivery layer for frontend applications in AWS, including selective monorepo deployments and end-to-end ownership from build pipelines to production rollout.',
  },
  {
    title: 'Sustainable Frontend Architecture',
    text: 'Structured large product areas so the frontend stayed scalable, understandable, and maintainable as the system, team, and feature set kept growing.',
  },
]

export const ownership = [
  'Led 3 engineers directly and coordinated with QA, designers, and a project manager.',
  'Acted as both formal and technical lead for the owned product area.',
  'Made technical direction decisions for the product area and the supporting library ecosystem.',
  'Presented internal architecture, CI/CD, and subdomain structure to the wider company.',
  'Introduced stronger delivery practices, including SCRUM routines and clearer epic and task specifications.',
  'Mentored engineers through 1:1s, presentations, and retrospectives, helping them become more autonomous and proactive.',
]

export const experience = [
  {
    period: '2024 — now',
    role: 'Frontend Team Lead',
    company: 'Systeme.io',
    text: 'Owned 3 applications and the shared library layer for a product with a customer base close to one million. Built from scratch and maintained an application that grew to roughly 370k lines of code, while leading technical direction, mentoring, UX and architecture decisions, and platform work around monorepo structure, white-label support, design system reuse, and production delivery.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Systeme.io',
    text: 'Built core product systems with React, Next.js, NestJS, and custom SSR. Delivered a fullstack page-generation application, created a complex TipTap-based editor, and led difficult editor migrations while preserving production content and user experience.',
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'FONBET Cyprus',
    text: 'Worked on large product areas in a complex legacy environment, shipping cross-browser interfaces and building the experience that later shaped my approach to modernization, decomposition, and frontend architecture.',
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
