import { portfolioImages } from './images'

type VisualVariant = 'trend' | 'distribution' | 'performance' | 'dashboard' | 'energy' | 'community'

type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
  objectPosition?: string
}

type ProjectEntry = {
  id: number
  number: string
  title: string
  category: string
  stack: string[]
  description: string
  period: string
  visual: VisualVariant
  featured?: boolean
  href?: string
  image?: ImageAsset
}

export const siteData = {
  name: 'Hansi Thennakoon',
  tagline: 'Business Analytics undergraduate — data analysis, visualization, and BI',
  contact: {
    address: 'No.412/15, Pitipana North, Kuruduwaththa, Homagama',
    phone: '+94 740687505',
    email: 'tennakoon10265@gmail.com',
    linkedIn: 'Hansi Tennakoon'
  },
  profileSummary: `Business Analytics undergraduate with a strong interest in data analysis, business intelligence, and data-driven decision-making. Developing practical skills in Python, R, Microsoft Excel, Tableau, and statistical analysis through academic projects. Seeking an internship to apply and further develop technical and analytical skills.`,
  heroImage: {
    src: portfolioImages.hero.src,
    alt: portfolioImages.hero.alt,
    width: portfolioImages.hero.width,
    height: portfolioImages.hero.height,
    objectPosition: portfolioImages.hero.objectPosition
  },
  aboutImage: {
    src: portfolioImages.about.src,
    alt: portfolioImages.about.alt,
    width: portfolioImages.about.width,
    height: portfolioImages.about.height,
    objectPosition: portfolioImages.about.objectPosition
  },
  profileImage: {
    src: portfolioImages.about.src,
    alt: portfolioImages.about.alt,
    width: portfolioImages.about.width,
    height: portfolioImages.about.height,
    objectPosition: portfolioImages.about.objectPosition
  },
  education: [
    {
      degree: 'BM (Honours) in Business Analytics',
      institution: 'NSBM Green University',
      period: 'July 2024 – Present',
      gpa: '3.41 / 4.00',
      status: 'Current GPA'
    },
    {
      degree: 'Advanced Level – Commerce (CCS)',
      institution: "Mahamaya Girls' College, Kandy",
      period: '2023–2024'
    }
  ],
  certifications: [
    { title: 'Extension Course in English for Professionals', provider: 'University of Peradeniya', year: 2024, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Fundamentals of Leadership', provider: 'Coursera', year: 2025, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Artificial Intelligence and Machine Learning in Business', provider: 'Alison', year: 2026, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Business Data Analytics: Strategies and Tools', provider: 'Alison', year: 2026, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Artificial Intelligence in Project Management', provider: 'Alison', year: 2026, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Introduction to Data Analytics with Python', provider: 'Alison', year: 2026, image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } },
    { title: 'Diploma in Applied Generative AI', provider: 'Alison', year: 'Ongoing', status: 'Ongoing', image: { src: portfolioImages.certificate.src, alt: portfolioImages.certificate.alt, width: portfolioImages.certificate.width, height: portfolioImages.certificate.height } }
  ],
  projects: [
    {
      id: 1,
      number: '01',
      title: 'Online Retail Sales Analysis',
      category: 'Python analytics',
      stack: ['Python', 'Pandas', 'Matplotlib'],
      description: 'Analyzed online retail data to identify revenue trends, top-selling products and high-performing countries.',
      period: 'Academic project',
      visual: 'trend',
      featured: true,
      href: undefined,
      image: {
        src: '/images/online-retail-sales-analysis.png',
        alt: 'Online retail sales analysis dashboard screenshot',
        width: 1200,
        height: 900,
        objectPosition: 'center center'
      }
    },
    {
      id: 2,
      number: '02',
      title: 'Student Performance Analysis',
      category: 'R analysis',
      stack: ['R', 'RStudio'],
      description: 'Analyzed student performance data and identified patterns involving grades, gender and study time.',
      period: 'Academic project',
      visual: 'distribution',
      featured: false,
      href: undefined,
      image: {
        src: '/images/student-performance-analysis-1.png',
        alt: 'Student performance analysis screenshot',
        width: 1200,
        height: 900,
        objectPosition: 'center center'
      }
    },
    {
      id: 3,
      number: '03',
      title: 'Retail Outlet Performance & Revenue Analysis',
      category: 'Analytical case study',
      stack: ['Python', 'R', 'Statistical Analysis'],
      description: 'Explored retail outlet performance and revenue patterns using analytical techniques to support business interpretation.',
      period: 'Academic project',
      visual: 'performance',
      featured: false,
      href: undefined,
      // Uncertain: the exact project title and full scope appear to be partially referenced but not fully detailed in the CV. Confirm before external publication.
    },
    {
      id: 4,
      number: '04',
      title: 'Coffee Vending Machine Sales Dashboard',
      category: 'Tableau dashboard',
      stack: ['Tableau'],
      description: 'Built an interactive dashboard to analyze revenue, sales patterns, product performance and customer purchase behavior.',
      period: 'Academic project',
      visual: 'dashboard',
      featured: true,
      href: undefined,
      image: {
        src: '/images/coffee-vending-machine-sales-dashboard.jpeg',
        alt: 'Coffee vending machine sales dashboard screenshot',
        width: 1200,
        height: 900,
        objectPosition: 'center center'
      }
    },
    {
      id: 5,
      number: '05',
      title: 'Global Renewable Energy Transition Dashboard',
      category: 'Tableau dashboard',
      stack: ['Tableau'],
      description: 'Explored renewable energy transition trends across time and geography using a dashboard-led storytelling approach.',
      period: '2015–2024',
      visual: 'energy',
      featured: false,
      href: undefined,
      // Uncertain: title and exact completion scope may need client confirmation because the CV reference is brief and not fully expanded.
    },
    {
      id: 6,
      number: '06',
      title: 'A Book for Every Child',
      category: 'SDG 10',
      stack: ['Community impact', 'Reading access'],
      description: 'Contributed to establishing a mini-library at Kananwila Sugathapala Vidyalaya to improve access to educational resources and promote reading.',
      period: 'Community initiative',
      visual: 'community',
      featured: false,
      href: undefined
    },
    {
      id: 7,
      number: '07',
      title: 'Empower Her',
      category: 'SDG 10 & SDG 12',
      stack: ['Community support', 'Sustainable livelihoods'],
      description: 'Participated in a skill-development workshop supporting unemployed women through self-employment, income generation and sustainable practices.',
      period: 'Community initiative',
      visual: 'community',
      featured: false,
      href: undefined
    }
  ] as ProjectEntry[],
  community: [
    { activity: 'Games Captain of the House', focus: 'House leadership and team coordination' },
    { activity: 'Senior Prefect of the School Committee', focus: 'School leadership and student representation' },
    { activity: 'Senior Girl Guide', focus: 'Sri Lanka Girl Guide Association' },
    { activity: 'School Chess Team', focus: 'Team participation and strategic thinking' },
    { activity: 'School Table Tennis Team', focus: 'Team participation and discipline' },
    { activity: 'NSBM Green University Sports Fiesta Badminton Team', focus: '2024, 2025' }
  ],
  skills: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint', 'Canva']
}
