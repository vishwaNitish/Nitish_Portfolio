import { ArrowUpRight, Download, Mail, Code2 } from 'lucide-react'
import { Github, Linkedin } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'nitish-vishwakarma', href: profile.links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'vishwaNitish', href: profile.links.github, icon: Github },
  { label: 'LeetCode', value: 'nsharma_ji', href: profile.links.leetcode, icon: Code2 },
]

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-paper md:py-36">
      <div className="container-x">
        <Reveal className="mb-6 flex items-center gap-4">
          <span className="label text-paper/60!">06</span>
          <span className="h-px w-12 bg-paper/30" aria-hidden="true" />
          <span className="label text-paper/60!">Contact</span>
        </Reveal>
        <Reveal as="h2" delay={0.05} className="display max-w-5xl text-[clamp(2.8rem,8.5vw,7.5rem)]">
          Have a problem worth building <em className="text-[#ff6b5e]">a solution for?</em>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
            I’m interested in opportunities where I can contribute to software development, build useful products, and
            continue growing as an engineer.
          </p>
        </Reveal>

        <ul className="mt-16 border-t border-paper/20">
          {links.map((l, i) => (
            <Reveal as="li" key={l.label} delay={i * 0.05} className="border-b border-paper/20">
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5 md:py-6"
              >
                <span className="flex items-center gap-4">
                  <l.icon size={20} aria-hidden="true" className="text-paper/60" />
                  <span className="label text-paper/60! w-20">{l.label}</span>
                </span>
                <span className="display flex-1 truncate py-1 leading-[1.2] text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                  {l.value}
                </span>
                <ArrowUpRight size={22} aria-hidden="true" className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-12">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-[#ff6b5e]"
          >
            <Download size={16} aria-hidden="true" />
            Download resume (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  )
}
