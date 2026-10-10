export const profile = {
  name: 'Aung Min Thu',
  role: 'MERN Stack Developer',
  secondaryRole: 'Fourth-Year CS Student',
  tagline:
    'MERN stack developer and fourth-year Computer Science student at the University of Computer Studies, Mandalay. I build full-stack web apps with MongoDB, Express, React, and Node.js.',
  aboutHeadline: ['MERN Stack Developer', 'Learning & Building.'],
  aboutLead:
    "I'm a fourth-year Computer Science student at the University of Computer Studies, Mandalay, specializing in the MERN stack — MongoDB, Express, React, and Node.js. I turn ideas into working full-stack applications and sharpened my skills in a 12-hour hackathon sprint.",
  location: 'Mandalay, Myanmar',
  timezone: 'UTC+6:30 (MMT)',
  email: 'aungtzy1430@gmail.com',
  availability: 'Open to internships',
  currentFocus: 'MERN Stack & Full-Stack Projects',
  philosophy: 'Learn, Build, Ship.',
  responseLatency: '< 24h',
}

export const stack = [
  { label: 'MongoDB', icon: 'database' },
  { label: 'Express.js', icon: 'dns' },
  { label: 'React', icon: 'bolt' },
  { label: 'Node.js', icon: 'terminal' },
  { label: 'JavaScript', icon: 'code_blocks' },
  { label: 'Tailwind CSS', icon: 'style' },
]

export const metrics = [
  {
    label: 'Core Stack',
    icon: 'layers',
    value: 'MERN',
    unit: 'Stack',
    caption: 'MongoDB · Express · React · Node.js',
    badgeIcon: 'deployed_code',
    accent: 'primary',
  },
  {
    label: 'Hackathon',
    icon: 'emoji_events',
    value: '12',
    unit: 'Hours',
    caption: 'Built and shipped a full-stack project in a 12-hour sprint',
    badgeIcon: 'bolt',
    accent: 'primary',
  },
  {
    label: 'Projects',
    icon: 'rocket_launch',
    value: '2+',
    unit: 'Built',
    caption: 'Real academic & personal MERN applications',
    badgeIcon: 'inventory_2',
    accent: 'primary',
  },
]

export const aboutMetrics = [
  { value: 'MERN', label: 'Core Stack', accent: 'primary' },
  { value: '12h', label: 'Hackathon', accent: 'tertiary' },
  { value: '4th', label: 'Year CS', accent: 'secondary' },
]

export const featuredProject = {
  file: 'hackathon-build.js',
  version: 'Shipped v1.0',
  cluster: 'STACK: MERN',
  rtt: 'BUILD 12h',
  category: 'Hackathon • Full-Stack',
  date: '2025',
  title: '12-Hour Hackathon Build',
  description:
    'A full-stack MERN application designed, built, and shipped with a team inside a single 12-hour hackathon sprint — from data modeling to a live React interface.',
  highlights: [
    {
      title: 'MongoDB + Mongoose',
      text: 'schema and data modeling for the core feature set.',
    },
    {
      title: 'Express REST API',
      text: 'routing and CRUD endpoints wired to the frontend.',
    },
    {
      title: 'React Frontend',
      text: 'responsive UI built and demoed within the sprint.',
    },
  ],
  tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  throughput: 'Shipped in 12 hours',
  link: '#',
  repo: '#',
  code: [
    [
      { t: 'import', c: 'tertiary' },
      { t: ' express ', c: 'plain' },
      { t: 'from', c: 'tertiary' },
      { t: " 'express'", c: 'secondary' },
      { t: ';', c: 'plain' },
    ],
    [
      { t: 'import', c: 'tertiary' },
      { t: ' mongoose ', c: 'plain' },
      { t: 'from', c: 'tertiary' },
      { t: " 'mongoose'", c: 'secondary' },
      { t: ';', c: 'plain' },
    ],
    [
      { t: 'const', c: 'tertiary' },
      { t: ' app = ', c: 'plain' },
      { t: 'express', c: 'primary' },
      { t: '();', c: 'plain' },
    ],
    [
      { t: 'app.use', c: 'primary' },
      { t: '(express.json());', c: 'plain' },
    ],
    [{ t: '// Connect to MongoDB and mount the CRUD routes', c: 'comment' }],
    [
      { t: 'await', c: 'tertiary' },
      { t: ' mongoose.connect', c: 'primary' },
      { t: '(process.env.MONGO_URI);', c: 'secondary' },
    ],
    [
      { t: 'app.listen', c: 'primary' },
      { t: '(3000, () => ', c: 'plain' },
      { t: "console.log", c: 'secondary' },
      { t: "('API up'));", c: 'plain' },
    ],
  ],
}

export const process = [
  {
    icon: 'school',
    accent: 'primary',
    title: 'Learning by Building',
    text: 'Applying coursework at the University of Computer Studies, Mandalay to real full-stack projects.',
  },
  {
    icon: 'construction',
    accent: 'tertiary',
    title: 'MERN End-to-End',
    text: 'From MongoDB schemas and Express APIs to responsive React interfaces — building the whole stack.',
  },
]

export const skillTiers = [
  {
    tier: 'TIER // 01',
    accent: 'secondary',
    icon: 'devices',
    title: 'Frontend',
    description:
      'Building responsive, component-driven interfaces with React, clean CSS, and an eye for usable design.',
    skills: [
      'React',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
  {
    tier: 'TIER // 02',
    accent: 'primary',
    icon: 'dns',
    title: 'Backend',
    description:
      'Designing REST APIs and data models with Node.js, Express, and MongoDB for real applications.',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'JWT Auth',
    ],
  },
  {
    tier: 'TIER // 03',
    accent: 'tertiary',
    icon: 'build',
    title: 'Tools & Practices',
    description:
      'Using modern developer tooling to build, test, and ship projects cleanly and consistently.',
    skills: [
      'Git & GitHub',
      'Postman',
      'VS Code',
      'MongoDB Compass',
      'Vite',
      'REST Integration',
    ],
  },
]

export const experience = [
  {
    role: 'Fourth-Year Computer Science Student',
    company: 'University of Computer Studies, Mandalay',
    team: 'Computer Science',
    period: '2023 — Present',
    current: true,
    accent: 'primary',
    companyIcon: 'school',
    summary:
      'Studying computer science with a focus on web development, databases, and software engineering, while building full-stack MERN projects alongside coursework.',
    impact: [
      { text: '🎓 Fourth Year', accent: 'primary' },
      { text: '💻 MERN Stack', accent: 'secondary' },
      { text: '📍 Mandalay', accent: 'tertiary' },
    ],
  },
  {
    role: 'Hackathon Participant',
    company: '12-Hour Hackathon',
    team: 'Team Sprint',
    period: '2025',
    current: false,
    accent: 'tertiary',
    companyIcon: 'emoji_events',
    summary:
      'Collaborated in a team to design, build, and ship a full-stack application within a single 12-hour hackathon sprint.',
    impact: [
      { text: '⏱ 12-Hour Sprint', accent: 'tertiary' },
      { text: '🤝 Team Project', accent: 'secondary' },
      { text: '🚀 Shipped Build', accent: 'primary' },
    ],
  },
  {
    role: 'Self-Directed MERN Projects',
    company: 'Personal & Academic Builds',
    team: 'Full-Stack Development',
    period: '2024 — Present',
    current: false,
    accent: 'secondary',
    companyIcon: 'code',
    summary:
      'Building real applications with the MERN stack, including an online library system and a green & smart city project.',
    impact: [
      { text: '📚 Sar Oak Sin Library', accent: 'muted' },
      { text: '🌱 Green & Smart City', accent: 'muted' },
      { text: '🔌 REST APIs', accent: 'muted' },
    ],
  },
]

export const projects = [
  {
    id: 'sar-oak-sin',
    index: '01',
    category: 'MERN • Education',
    title: 'Sar Oak Sin — Online Library System',
    description:
      'A full-stack library management system with book cataloging, borrow and return tracking, and an admin dashboard built on the MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'FULL-STACK',
    statusAccent: 'primary',
    statusIcon: 'library_books',
    metric: 'MERN Stack',
    accent: 'primary',
    link: '#',
    repo: '#',
  },
  {
    id: 'green-smart-city',
    index: '02',
    category: 'MERN • Sustainability',
    title: 'Green and Smart City',
    description:
      'A smart-city web platform that surfaces environmental and city data through an interactive dashboard with REST APIs and a React frontend.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'FULL-STACK',
    statusAccent: 'tertiary',
    statusIcon: 'eco',
    metric: 'MERN Stack',
    images: [
      '/projects/green-smart-city-1.png',
      '/projects/green-smart-city-2.png',
      '/projects/green-smart-city-3.png',
    ],
    imageAlts: [
      'Green and Smart City - environmental dashboard overview',
      'Green and Smart City - city data visualization',
      'Green and Smart City - sustainability analytics view',
    ],
    accent: 'tertiary',
    link: '#',
    repo: '#',
  },
  {
    id: 'hackathon-build',
    index: '03',
    category: 'Hackathon',
    title: '12-Hour Hackathon Project',
    description:
      'A full-stack application designed, built, and demoed with a team inside a single 12-hour hackathon sprint.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: '12H SPRINT',
    statusAccent: 'secondary',
    statusIcon: 'emoji_events',
    metric: 'Team Build',
    accent: 'secondary',
    link: '#',
    repo: '#',
  },
  {
    id: 'portfolio',
    index: '04',
    category: 'Frontend',
    title: 'Portfolio Website',
    description:
      'This personal portfolio — a React single-page app with client-side routing, themed components, and a fully responsive dark UI.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    status: 'DEPLOYED',
    statusAccent: 'primary',
    statusIcon: 'public',
    metric: 'React + Vite',
    accent: 'primary',
    link: '#',
    repo: '#',
  },
]

export const contact = {
  home: {
    eyebrow: 'COLLABORATION & INQUIRIES',
    title: 'Want to build something together?',
    text: 'Open to internships, student collaborations, and MERN stack projects.',
    cta: 'Start a Conversation',
  },
  about: {
    eyebrow: 'INITIATE COMMUNICATION',
    title: 'Open to internships and full-stack collaboration?',
    text: 'Currently a fourth-year CS student at UCS Mandalay, open to internships and junior developer opportunities.',
  },
}

export const methodology = {
  eyebrow: 'How I Work',
  title: 'Learn by building.',
  text: 'I turn coursework into working software — modeling data in MongoDB, exposing it through Express, and shipping responsive React interfaces.',
  badges: [
    { icon: 'school', accent: 'primary', title: 'UCS Mandalay', sub: 'FOURTH YEAR CS' },
    { icon: 'emoji_events', accent: 'tertiary', title: '12-Hour Hackathon', sub: 'TEAM SPRINT' },
  ],
}
