import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { certifications, codingProfiles } from '../data/certifications'
import { profile } from '../data/profile'

export function Learning() {
  const lc = codingProfiles.leetcode
  return (
    <section id="learning" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading number="05" eyebrow="Learning" title="Certifications &" italic="practice." />

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="label mb-6">Certifications</h3>
            </Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <Reveal as="li" key={c.title} className="flex items-start justify-between gap-4 py-5">
                  <div>
                    <p className="display text-2xl md:text-3xl">{c.title}</p>
                    <p className="mt-1 text-sm text-muted">{c.provider}</p>
                  </div>
                  <span className="label pt-2">{c.year}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <h3 className="label mb-6">Coding profiles</h3>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-sm border border-line p-6 transition-colors hover:border-ink"
                >
                  <div className="flex items-start justify-between">
                    <span className="label">GitHub</span>
                    <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-10">
                    <p className="display text-5xl">7</p>
                    <p className="mt-2 text-sm text-muted">public repositories · {codingProfiles.github.note}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-sm border border-line p-6 transition-colors hover:border-ink"
                >
                  <div className="flex items-start justify-between">
                    <span className="label">LeetCode</span>
                    <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-10">
                    <p className="display text-5xl">{lc.solved}</p>
                    <p className="mt-2 text-sm text-muted">
                      problems solved in {lc.language} · as of {lc.asOf}
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Most-practiced topics: {lc.topics.join(', ')}. I’m still early on this journey and practicing regularly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
