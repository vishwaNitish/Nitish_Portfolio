export interface Project {
  id: string
  title: string
  year: string
  tagline: string
  problem: string
  contribution: string
  stack: string[]
  details: string[]
  /** Short, verified pipeline shown as a designed diagram (NOT a screenshot). */
  flow: string[]
  flowCaption: string
  repo?: string
  demo?: string
  /** Shown when there is no public repository. */
  repoNote?: string
  note?: string
}

// Facts come from: your resume, and the READMEs/descriptions on github.com/vishwaNitish.
// No repository has screenshots or a verified live deployment, so none are shown.
export const featured: Project[] = [
  {
    id: 'interviewready',
    title: 'InterviewReady AI',
    year: '2026',
    tagline: 'An interview-prep platform that reads your resume against a job description.',
    problem:
      'Candidates rarely know how well their resume matches a role or which skills to prepare. This app analyzes both and builds a preparation plan around the gap.',
    contribution: 'Built the platform: the AI integration, authentication, resume parsing and APIs.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'JWT', 'Puppeteer'],
    details: [
      'Gemini AI generates technical and behavioral questions from the candidate profile and target job.',
      'Resume and job-description analysis produces a match score and highlights skill gaps.',
      'JWT authentication, PDF resume parsing, REST APIs and MongoDB store users and interview reports.',
      'AI-assisted resume tailoring with Puppeteer-based PDF generation for ATS-friendly resumes.',
    ],
    flow: ['Resume + job description', 'PDF parsing', 'Gemini analysis', 'Match score + skill gaps', 'Questions + tailored resume'],
    flowCaption: 'Designed diagram of the pipeline, not a screenshot',
    repoNote: 'Source is not public yet.',
  },
  {
    id: 'weatherguard',
    title: 'WeatherGuard',
    year: '2026',
    tagline: 'An invite-only weather alert platform that messages approved users on Telegram every hour.',
    problem:
      'Weather alerts should go only to people an admin has approved. Users request access through OAuth, an admin approves them, and approved users receive hourly alerts through a Telegram bot.',
    contribution: 'Designed and built the full stack: API, auth, scheduler and dashboard.',
    stack: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Passport', 'OpenWeather API', 'Telegram Bot', 'Docker'],
    details: [
      'Google and GitHub OAuth through Passport, with JWT-secured API routes and an admin-only guard.',
      'Admin dashboard to approve or reject pending users (PENDING → APPROVED / REJECTED).',
      'An hourly cron job fetches OpenWeather data, messages every approved user with a linked chat, and logs success or failure per send.',
      'Frontend uses React Router, TanStack Query and Zustand; the API is documented with Swagger; docker-compose included.',
    ],
    flow: ['OAuth login', 'Admin approval', 'Connect Telegram', 'Hourly cron job', 'Alert + delivery log'],
    flowCaption: 'Designed diagram based on the repository README, not a screenshot',
    repo: 'https://github.com/vishwaNitish/WeatherGuard',
    note: 'Not deployed: the README documents Render + Vercel deployment steps, but no live URL is published.',
  },
  {
    id: 'fake-news',
    title: 'Fake News Detection',
    year: '2025–26',
    tagline: 'Exploring how machine learning can help flag potentially misleading news.',
    problem:
      'A full-stack classification system: users submit article text and a separate Python service returns a prediction that the web app stores and displays.',
    contribution: 'Primary contribution: backend development.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'scikit-learn', 'TF-IDF'],
    details: [
      'Three-part architecture in the repository: React client, Node/Express server, and a Flask ML API.',
      'Text preprocessing and TF-IDF features feed classical machine-learning classifiers.',
      'The Flask REST API is integrated with the MERN front end for predictions on demand.',
    ],
    flow: ['React client', 'Express server', 'Flask ML API', 'Prediction', 'MongoDB history'],
    flowCaption: 'Designed diagram based on the repository folders (client, server, flask-api), not a screenshot',
    repo: 'https://github.com/vishwaNitish/Fake-news-detection',
    note: 'An academic experiment. Model scores come from a benchmark dataset and do not describe real-world reliability.',
  },
  {
    id: 'banking',
    title: 'Banking System',
    year: 'Java',
    tagline: 'A desktop bank management application with a Swing interface and a MySQL back end.',
    problem:
      'A hands-on exercise in object-oriented design and database-backed desktop software, modelled on everyday ATM operations.',
    contribution: 'Built the application (Java + MySQL).',
    stack: ['Java', 'Swing', 'MySQL', 'OOP'],
    details: [
      'Implemented features listed in the repository: account creation, balance enquiry, deposits and withdrawals.',
      'PIN change, mini statements and a fast-cash option.',
      'Swing GUI with MySQL handling all persistent data.',
    ],
    flow: ['Swing GUI', 'Banking operations', 'MySQL'],
    flowCaption: 'Designed diagram of the application layers, not a screenshot',
    repo: 'https://github.com/vishwaNitish/banking-system-swing-mysql',
  },
  {
    id: 'attrition',
    title: 'Employee Attrition Analysis',
    year: 'Analysis',
    tagline: 'Exploratory analysis of employee attrition for the Green Destinations dataset.',
    problem:
      'Which employee groups are most likely to leave? A Jupyter-based exploratory analysis using Python data tools.',
    contribution: 'Carried out the analysis and visualizations.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    details: [
      'Exploratory data analysis of attrition and retention patterns.',
      'Visual comparisons using Matplotlib and Seaborn.',
      'See the notebook in the repository for the exact calculations and findings.',
    ],
    flow: ['Dataset', 'Pandas exploration', 'Matplotlib / Seaborn visuals', 'Insights'],
    flowCaption: 'Designed diagram of the analysis workflow, not a screenshot',
    repo: 'https://github.com/vishwaNitish/Green-Destinations---Attrition-Analysis',
    note: 'Headline percentages are deliberately left out until they are checked against the notebook.',
  },
]

export interface ArchiveItem {
  title: string
  description: string
  stack: string
  repo: string
}

export const archive: ArchiveItem[] = [
  {
    title: 'FND',
    description: 'MERN + Python ML scaffold for fake news detection, with a documented architecture and API.',
    stack: 'JavaScript · React · Express · Python',
    repo: 'https://github.com/vishwaNitish/FND',
  },
  {
    title: 'RDEC-SEC-E',
    description: 'Java course repository, forked from the instructor (dynamicdev4all/RDEC-SEC-E).',
    stack: 'Java',
    repo: 'https://github.com/vishwaNitish/RDEC-SEC-E',
  },
]
