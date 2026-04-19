import { CvIcon, EmailIcon, GitHubIcon, LinkedInIcon } from './components/icons'

export const pillars = [
  'Senior Frontend Engineer with 6+ years building scalable React and TypeScript products for SaaS teams.',
  'Strong hands-on track record in frontend architecture, performance optimization, and legacy modernization.',
  'Delivered full-stack product work with React, Next.js, NestJS, tRPC, and custom SSR in fast-moving environments.',
  'Operate with end-to-end ownership across product architecture, shared platforms, CI/CD, rollout, and production support.',
]

export const impact = [
  {
    title: 'Platform Scale',
    text: 'Owned 3 production applications and 7-8 shared libraries for a SaaS product serving a customer base close to one million.',
  },
  {
    title: 'Delivery Speed',
    text: 'Built a frontend architecture that accelerated delivery of new product capabilities by up to 5x, increasing team throughput across quarters.',
  },
  {
    title: 'Performance and Reuse',
    text: 'Reduced frontend bundle size by about 3x while improving reuse, maintainability, and structure of the shared platform.',
  },
  {
    title: 'Business Outcomes',
    text: 'Contributed to a modernized dashboard experience that supported the acquisition of 20k+ new paying customers and reduced unnecessary backend traffic with smarter revalidation.',
  },
]

export const systems = [
  {
    title: 'Microfrontend Monorepo Platform',
    text: 'Designed and implemented a microfrontend monorepo that unified shared business domains, UI foundations, and localization across 28 languages.',
  },
  {
    title: 'Full-Stack Product Applications',
    text: 'Built and maintained full-stack applications with React, NestJS, and tRPC, owning the architecture from frontend boundaries to operational rollout.',
  },
  {
    title: 'Rich Text Editing Platform',
    text: 'Developed a feature-rich editor used across multiple product domains, creating a seamless cross-product editing experience for more advanced customer workflows.',
  },
  {
    title: 'Legacy Dashboard Modernization',
    text: 'Led the redesign and modernization of a legacy dashboard onto a modern frontend stack, improving product experience and enabling faster iteration.',
  },
  {
    title: 'Revalidation and Delivery Infrastructure',
    text: 'Designed a domain-aware request revalidation layer and owned delivery from build pipelines to AWS rollout and production support.',
  },
  {
    title: 'Marketing and SEO Web Delivery',
    text: 'Built customer-facing marketing pages with React and pre-rendered React, improving technical quality, SEO, and speed of website delivery.',
  },
]

export const ownership = [
  'Own product areas end to end, from architecture and implementation to rollout, production support, and long-term maintainability.',
  'Work comfortably across frontend platform design, CI/CD, performance, and selective backend integration when product scope requires it.',
  'Collaborate closely with design, QA, and product to ship reliable interfaces and keep execution quality high in fast-moving teams.',
  'Use modern engineering workflows, including AI-assisted development, to increase iteration speed without lowering technical standards.',
  'Help teams scale through technical direction, shared platform thinking, and pragmatic modernization of legacy systems.',
  'Balance hands-on delivery with cross-functional ownership so new capabilities can move from idea to production without handoff friction.',
]

export const experience = [
  {
    period: '2024 — now',
    role: 'Frontend Team Lead',
    company: 'Systeme.io',
    text: 'Owned 3 production applications and 7-8 shared libraries, including 2 full-stack applications built with React, NestJS, and tRPC. Designed a microfrontend monorepo across 28 languages, reduced bundle size by about 3x, accelerated delivery of new capabilities by up to 5x, and owned rollout from architecture and pipelines to AWS production support.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Systeme.io',
    text: 'Led the redesign and modernization of a legacy dashboard using a modern frontend stack, contributing to the acquisition of 20k+ new paying customers. Built a rich-text editor used across multiple product domains and designed a domain-aware revalidation layer that reduced unnecessary backend traffic and infrastructure cost while preserving UX quality.',
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'FONBET Cyprus',
    text: 'Contributed to a large-scale back-office product in a complex legacy environment, shipping internal product sections, extending frontend libraries, and delivering reliable cross-browser interfaces in close collaboration with design and QA.',
  },
  {
    period: '2020 — 2021',
    role: 'Web Developer',
    company: 'ADCOMM',
    text: 'Built and maintained customer-facing marketing pages with React and pre-rendered React, improving development consistency, technical quality, SEO, and the overall online presence used to attract new clients.',
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
