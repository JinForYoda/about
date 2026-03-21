import type { ComponentPropsWithoutRef } from 'react'

function GitHubIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28.109 34.4c-.35 0-.635-.284-.635-.634V24.13c0-3.484-1.788-3.484-2.462-3.484-1.878 0-2.829 1.172-2.829 3.484v9.636c0 .35-.284.634-.635.634h-5.684a.635.635 0 0 1-.635-.634V15.41c0-.35.284-.634.635-.634h5.684c.35 0 .635.284.635.634v.986c1.146-1.056 2.623-1.619 4.303-1.619 1.549 0 6.616.536 6.616 8.697v10.292a.635.635 0 0 1-.634.634h-5.359Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.78 34.4a.635.635 0 0 1-.635-.634V15.41c0-.35.285-.634.635-.634h5.685c.35 0 .634.284.634.634v18.356c0 .35-.284.634-.634.634H6.78Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.597 13.639c-2.204 0-3.997-1.803-3.997-4.019C5.6 7.403 7.393 5.6 9.597 5.6c2.201 0 3.993 1.804 3.993 4.021 0 2.216-1.792 4.019-3.993 4.019Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EmailIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 7.5 12 12.3l6.5-4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CvIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 3.75h6.8l3.45 3.45V20.25H8a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14.75 3.75v3.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 17h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export { CvIcon, EmailIcon, GitHubIcon, LinkedInIcon }
