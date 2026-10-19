// Only certifications listed on your resume. Add `url` when you have a credential link.
// Others from your notes (Infosys Springboard, AWS Cloud Academy, Deloitte/Forage, Java Full Stack
// training) are not on your resume, so they are left out until you confirm title, provider and year.
export interface Certification {
  title: string
  provider: string
  year: string
  url?: string
}

export const certifications: Certification[] = [
  { title: 'AI and ML with Data Science', provider: 'IIT Roorkee', year: '2025' },
  { title: 'Data Structures and Algorithms using Java', provider: 'NPTEL', year: '2024' },
]

export const codingProfiles = {
  github: {
    repoCount: 7,
    repos: '7 public repositories',
    note: 'Pull Shark achievement',
  },
  leetcode: {
    solved: 19,
    asOf: 'Oct 2026',
    language: 'Java',
    topics: ['Array ×9', 'String ×8', 'Dynamic Programming ×5', 'Two Pointers ×5', 'Hash Table ×4'],
  },
}
