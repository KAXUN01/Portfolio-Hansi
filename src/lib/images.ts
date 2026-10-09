export type PortfolioImageConfig = {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  objectPosition?: string
}

export const portfolioImages = {
  hero: {
    src: '/images/hero-portrait.png',
    alt: 'Hero portrait of Hansi Thennakoon',
    width: 1400,
    height: 1200,
    priority: true,
    objectPosition: 'center center'
  },
  about: {
    src: '/images/about-portrait.jpg',
    alt: 'Portrait of Hansi Thennakoon for the about section',
    width: 900,
    height: 1100,
    priority: true,
    objectPosition: 'center center'
  },
  profile: {
    src: '/images/profile.jpg',
    alt: 'Portrait of Hansi Thennakoon',
    width: 900,
    height: 1100,
    priority: true,
    objectPosition: 'center center'
  },
  project: {
    src: '/images/project-placeholder.svg',
    alt: 'Abstract placeholder for a portfolio project visual',
    width: 1200,
    height: 900,
    objectPosition: 'center center'
  },
  dashboard: {
    src: '/images/dashboard-placeholder.svg',
    alt: 'Abstract placeholder for a dashboard screenshot',
    width: 1200,
    height: 900,
    objectPosition: 'center center'
  },
  certificate: {
    src: '/images/certificate-placeholder.svg',
    alt: 'Abstract placeholder for a certificate preview',
    width: 1200,
    height: 900,
    objectPosition: 'center center'
  }
} as const

export const imagePresets = {
  projectCard: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  },
  profileHero: {
    sizes: '(max-width: 1024px) 100vw, 48vw'
  },
  profileAbout: {
    sizes: '(max-width: 1024px) 100vw, 38vw'
  },
  dashboard: {
    sizes: '(max-width: 768px) 100vw, 50vw'
  }
} as const
