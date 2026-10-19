export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  badge?: string
  description?: string
  responsibilities: string[]
  technologies: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  description: string
  highlights?: string[]
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  skills: {
    name: string
    level?: string
    icon?: string
    highlight?: boolean
  }[]
}

export interface LanguageItem {
  name: string
  proficiency: string
  levelPercentage: number
  nativeName?: string
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  role: string
  tags: string[]
  metrics?: string
  iconName: string
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export const PERSONAL_INFO = {
  name: 'Chea Vuthy',
  role: 'Mobile Developer & Project Lead',
  tagline: 'Flutter | Native | .NET Core | UI/UX | AI-Assisted Development',
  shortBio:
    'Dedicated Mobile Developer and Project Lead with proven expertise in engineering high-performance cross-platform and native mobile applications. Specializing in Flutter, pixel-perfect UI/UX delivery from Figma, robust C# .NET Core backend integration, bank payment systems, and real-time infrastructure.',
  fullAbout: [
    'I am a passionate Mobile Developer and Project Lead based in Phnom Penh, Cambodia. With over 4 years of hands-on software development experience, I have led technical teams to build scalable, production-ready applications across Android, iOS, and Windows.',
    'My core philosophy combines human-centric UI/UX design with rock-solid architectural fundamentals. From translating intricate Figma prototypes into fluent Flutter animations to integrating high-security bank payment gateways and real-time delivery APIs, I prioritize stability, performance, and delightful user experiences.',
    'I actively embrace AI-assisted engineering (Gemini, ChatGPT, DeepSeek) to accelerate development cycles, automate repetitive tasks, optimize code quality, and mentor junior engineers toward engineering excellence.'
  ],
  email: 'vuthychea774@gmail.com',
  phone: '+885-96 511 8800',
  formattedPhone: '+855 96 511 8800',
  location: 'Phnom Penh, Cambodia',
  status: 'Open to Opportunities & Leadership Roles',
  avatarUrl: '/profile.jpg', // User can add public/profile.jpg or public/avatar.jpg
  resumeUrl: '/CV.pdf',
  socialLinks: {
    email: 'mailto:vuthychea774@gmail.com',
    phone: 'tel:+855965118800',
    telegram: 'https://t.me/vuthychea',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
}

export const STATS: StatItem[] = [
  {
    value: '4+',
    label: 'Years of Experience',
    description: 'In mobile & cross-platform engineering'
  },
  {
    value: '15+',
    label: 'Projects Delivered',
    description: 'From enterprise apps to customer solutions'
  },
  {
    value: '100%',
    label: 'Figma to Flutter Fidelity',
    description: 'Pixel-perfect UI/UX implementations'
  },
  {
    value: '99.9%',
    label: 'Integration Reliability',
    description: 'Bank payment gateways & real-time APIs'
  }
]

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-to-group',
    role: 'Mobile Developer / Project Lead',
    company: 'T.O Group Co., LTD',
    period: 'May 2022 – Present',
    location: 'Phnom Penh, Cambodia',
    badge: 'Current Role',
    description:
      'Directing mobile architecture, cross-platform engineering, and cross-functional sprint planning while delivering mission-critical customer and enterprise systems.',
    responsibilities: [
      'Led development of cross-platform and native applications for Android, Windows, and iOS.',
      'Built custom UI/UX experiences in Figma and transformed them into pixel-perfect Flutter implementations.',
      'Integrated bank payment gateways and delivery APIs for seamless order and transaction workflows.',
      'Implemented real-time notifications using Firebase and SignalR.',
      'Utilized AI tools (ChatGPT, Gemini, DeepSeek) to accelerate debugging, automate documentation, and generate code snippets.',
      'Managed project roadmaps, code reviews, and sprint planning with cross-functional teams.',
      'Mentored junior developers and provided code reviews to maintain coding standards.'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Android',
      'iOS',
      'Windows',
      'Figma',
      'Payment Gateways',
      'Delivery APIs',
      'Firebase',
      'SignalR',
      'AI Tools (ChatGPT, Gemini, DeepSeek)',
      'Agile / Scrum'
    ]
  },
  {
    id: 'exp-cubetiq',
    role: 'Junior Mobile Developer',
    company: 'CUBETIQ SOLUTION',
    period: 'Jan 2020 – Apr 2022',
    location: 'Phnom Penh, Cambodia',
    badge: '2+ Years',
    description:
      'Contributed to client and internal mobile applications, focusing on responsive UI engineering, clean API consumption, and application performance.',
    responsibilities: [
      'Supported Flutter app development for internal and client projects.',
      'Assisted in UI/UX design and basic backend implementation.',
      'Improved app performance and code stability through refactoring and testing.'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'REST APIs',
      'UI/UX Design',
      'State Management',
      'App Optimization',
      'Git'
    ]
  },
  {
    id: 'exp-setec-assistant',
    role: 'IT Room Assistant',
    company: 'SETEC INSTITUTE',
    period: 'May 2017 – Feb 2018',
    location: 'Phnom Penh, Cambodia',
    badge: 'Foundation',
    description:
      'Provided university-level technical operations, campus hardware reliability, and lab infrastructure management.',
    responsibilities: [
      'Provided technical support and troubleshooting for computer labs.',
      'Maintained hardware and network systems for daily operations.'
    ],
    technologies: ['Network Configuration', 'Hardware Troubleshooting', 'System Maintenance', 'Technical Support']
  }
]

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-setec',
    degree: 'Management Information System (MIS)',
    institution: 'SETEC INSTITUTE',
    location: 'Phnom Penh, Cambodia',
    period: '2017 – 2021',
    description:
      'Comprehensive degree program focusing on software architecture, database management, systems analysis, and enterprise information technology solutions.',
    highlights: [
      'Software Engineering & System Architecture',
      'Relational Database Management (SQL)',
      'Enterprise System Analysis & Design'
    ]
  },
  {
    id: 'edu-puc',
    degree: 'English Program (IEAP)',
    institution: 'Paññāsāstra University of Cambodia (PUC)',
    location: 'Phnom Penh, Cambodia',
    period: '2018 – 2019',
    description:
      'Intensive English for Academic and Professional Purposes, honing professional oral and written communication, technical documentation, and cross-cultural presentation.',
    highlights: [
      'Advanced Professional English Communication',
      'Technical Documentation & Presentation',
      'Collaborative Team Discussions'
    ]
  }
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile & Cross-Platform',
    icon: 'smartphone',
    skills: [
      { name: 'Flutter (Android, iOS, Windows)', level: 'Advanced / Primary', highlight: true },
      { name: 'Native Android', level: 'Proficient', highlight: true },
      { name: 'Native Windows', level: 'Proficient' },
      { name: 'Basic iOS Native', level: 'Working Knowledge' },
      { name: 'Dart', level: 'Advanced', highlight: true },
      { name: 'State Management (Bloc/Provider/Riverpod)', level: 'Advanced' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    icon: 'server',
    skills: [
      { name: 'C#', level: 'Proficient', highlight: true },
      { name: '.NET Core', level: 'Proficient', highlight: true },
      { name: 'RESTful APIs', level: 'Advanced', highlight: true },
      { name: 'SignalR (Real-time)', level: 'Proficient', highlight: true },
      { name: 'API Design & Optimization', level: 'Proficient' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Developer Acceleration',
    icon: 'sparkles',
    skills: [
      { name: 'ChatGPT Prompt Engineering', level: 'Advanced', highlight: true },
      { name: 'Gemini Coding & Reasoning', level: 'Advanced', highlight: true },
      { name: 'DeepSeek LLM Integration', level: 'Proficient', highlight: true },
      { name: 'Cortex AI Tools', level: 'Proficient' },
      { name: 'Automated Code Generation & Debugging', level: 'Expert', highlight: true }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design & Translation',
    icon: 'palette',
    skills: [
      { name: 'Figma', level: 'Advanced', highlight: true },
      { name: 'Adobe XD', level: 'Proficient' },
      { name: 'Pixel-Perfect Flutter Implementation', level: 'Expert', highlight: true },
      { name: 'Design Systems & Component Libraries', level: 'Proficient' },
      { name: 'Micro-Interactions & Animation', level: 'Proficient' }
    ]
  },
  {
    id: 'integration',
    title: 'Integrations & Cloud Services',
    icon: 'layers',
    skills: [
      { name: 'Bank Payment Gateways (ABA, Bakong, etc.)', level: 'Expert', highlight: true },
      { name: 'Delivery Platform APIs', level: 'Advanced', highlight: true },
      { name: 'Firebase Cloud Messaging (FCM)', level: 'Advanced', highlight: true },
      { name: 'Firebase Realtime & Auth', level: 'Advanced' },
      { name: 'Third-Party Webhooks & SDKs', level: 'Advanced' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    icon: 'database',
    skills: [
      { name: 'SQL Server', level: 'Proficient', highlight: true },
      { name: 'SQLite (Mobile Local Storage)', level: 'Advanced', highlight: true },
      { name: 'Firebase Firestore', level: 'Advanced' },
      { name: 'Database Schema Design', level: 'Proficient' }
    ]
  },
  {
    id: 'tools',
    title: 'DevOps & Collaboration Tools',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', highlight: true },
      { name: 'Postman (API Testing)', level: 'Advanced', highlight: true },
      { name: 'Agile & Scrum Methodologies', level: 'Advanced', highlight: true },
      { name: 'Jira & Sprint Planning', level: 'Advanced' },
      { name: 'Code Review & Mentorship', level: 'Leadership' }
    ]
  }
]

export const LANGUAGES: LanguageItem[] = [
  {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
    proficiency: 'Native / Mother Tongue',
    levelPercentage: 100
  },
  {
    name: 'English',
    nativeName: 'English',
    proficiency: 'Professional Working Proficiency',
    levelPercentage: 88
  }
]

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Smart E-Commerce & Delivery Ecosystem',
    subtitle: 'Cross-Platform Mobile App (Android & iOS)',
    description:
      'Engineered an end-to-end shopping and logistics tracking mobile application with integrated bank payment gateways, real-time courier geolocation, and instant push alerts using Firebase and SignalR.',
    role: 'Lead Mobile Developer',
    tags: ['Flutter', 'Bank Payment Gateway', 'Delivery APIs', 'Firebase', 'SignalR'],
    metrics: 'Seamless checkout with 99.9% payment success rate',
    iconName: 'shopping-bag'
  },
  {
    id: 'proj-2',
    title: 'Enterprise Multi-Platform Operations Suite',
    subtitle: 'Windows & Mobile Synchronization',
    description:
      'Architected a unified Flutter desktop and mobile application for inventory control and staff workflow, backed by C# .NET Core RESTful APIs and Microsoft SQL Server.',
    role: 'Project Lead & Architecture',
    tags: ['Flutter (Windows/Mobile)', 'C# .NET Core', 'SQL Server', 'REST APIs'],
    metrics: 'Synced across desktop terminals and mobile handhelds in real-time',
    iconName: 'monitor'
  },
  {
    id: 'proj-3',
    title: 'FinTech Payment Integration Engine',
    subtitle: 'Secure Transaction & Biometric Workflow',
    description:
      'Implemented secure bank payment connectors, QR payment scanning (Bakong / local payment providers), and transaction webhooks with automated receipts.',
    role: 'Mobile Developer',
    tags: ['Flutter', 'QR Payment', 'Security & Biometrics', 'Webhooks'],
    metrics: 'Compliant with bank transaction standards and instant notifications',
    iconName: 'credit-card'
  },
  {
    id: 'proj-4',
    title: 'AI-Accelerated Mobile Workflow Engine',
    subtitle: 'Automated CI/CD & Code Generation Harness',
    description:
      'Integrated LLM-assisted workflows (ChatGPT, Gemini, DeepSeek) into the team pipeline to generate test cases, write repetitive Flutter boilerplate, and accelerate debugging.',
    role: 'Initiator & Project Lead',
    tags: ['AI Prompt Engineering', 'Gemini', 'DeepSeek', 'Developer Tooling'],
    metrics: 'Saved 35%+ development time on repetitive boilerplate & bug tracking',
    iconName: 'cpu'
  }
]

export const CORE_VALUES = [
  {
    title: 'Pixel-Perfect Execution',
    description:
      'Translating Figma designs into 60fps Flutter widgets with exact typography, spacing, and micro-interactions.',
    icon: 'sparkles'
  },
  {
    title: 'Resilient System Architecture',
    description:
      'Building robust mobile solutions that handle network interruptions, real-time sockets, and secure payment states gracefully.',
    icon: 'shield-check'
  },
  {
    title: 'Collaborative Leadership',
    description:
      'Guiding sprint planning, conducting constructive code reviews, and elevating team capabilities through active mentorship.',
    icon: 'users'
  },
  {
    title: 'AI-Enhanced Velocity',
    description:
      'Harnessing state-of-the-art AI models to supercharge problem solving, documentation, and continuous delivery.',
    icon: 'bolt'
  }
]
