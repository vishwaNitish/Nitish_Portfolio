// Every item appears on your resume or is used in a verified repository (e.g. NestJS, TypeScript, OAuth).
export interface SkillGroup {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material UI', 'Responsive design'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'Flask', 'REST APIs', 'JWT', 'OAuth', 'Firebase OTP', 'Mongoose'],
  },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
  {
    title: 'AI & data',
    items: ['Gemini API', 'Prompt engineering', 'TF-IDF / NLP basics', 'scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'Figma', 'Axios', 'Docker basics', 'VS Code'],
  },
  {
    title: 'Foundations',
    items: ['OOP', 'Data structures & algorithms', 'DBMS', 'Exception handling', 'Debugging'],
  },
]
