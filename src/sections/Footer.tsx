import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="bg-ink pb-10 text-paper/60">
      <div className="container-x flex flex-col gap-3 border-t border-paper/20 pt-6 text-sm md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed and built with React, TypeScript and Tailwind CSS.</p>
        <a href="#home" className="link-u w-fit">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
