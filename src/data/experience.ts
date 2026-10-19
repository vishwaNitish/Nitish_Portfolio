export interface Experience {
  company: string
  role: string
  period: string
  location: string
  summary: string
  points: string[]
  tags: string[]
  published: boolean
}

// Only contributions listed on your resume are published.
export const experience: Experience[] = [
  {
    company: 'Bluestock Fintech',
    role: 'SDE Intern',
    period: 'Nov 2025 – Dec 2025',
    location: 'Remote',
    summary: 'Backend and front-end work on fintech application features.',
    points: [
      'Developed REST APIs with Node.js, Express.js and MongoDB for scalable backend services.',
      'Implemented secure authentication using Firebase OTP and JWT-based authorization.',
      'Integrated a React.js front end with the backend APIs using Axios.',
      'Built responsive UI components with React.js and Material UI from Figma designs.',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'JWT', 'Firebase OTP', 'Material UI'],
    published: true,
  },
  {
    // NOT PUBLISHED: this internship is not on your latest resume and its dates were never
    // verified. Add the title and dates, then set `published: true` to show it.
    company: 'Unified Mentor',
    role: 'Data Science Intern',
    period: 'TO VERIFY',
    location: 'Remote',
    summary: 'Employee attrition analysis (Green Destinations).',
    points: ['Exploratory analysis with Python, Pandas, Matplotlib and Seaborn.'],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    published: false,
  },
]
