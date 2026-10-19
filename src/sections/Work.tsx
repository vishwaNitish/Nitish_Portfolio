import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { Github } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { FlowDiagram } from '../components/FlowDiagram'
import { archive, featured } from '../data/projects'

export function Work() {
  const [openId, setOpenId] = useState<string | null>(featured[0].id)

  return (
    <section id="work" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading number="03" eyebrow="Selected work" title="Projects I’m" italic="proud of." />

        <ul className="border-b border-ink">
          {featured.map((p, i) => {
            const open = openId === p.id
            const panelId = `panel-${p.id}`
            return (
              <li key={p.id} className="border-t border-ink">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : p.id)}
                    className="group flex w-full items-baseline gap-4 py-6 text-left md:gap-8 md:py-9"
                  >
                    <span className="label w-8 shrink-0 text-accent!">{String(i + 1).padStart(2, '0')}</span>
                    <span
                      className={`display flex-1 text-[clamp(2.1rem,6.5vw,5.5rem)] transition-all duration-300 group-hover:translate-x-2 ${
                        open ? 'text-accent' : ''
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="label hidden shrink-0 md:block">{p.year}</span>
                    <Plus
                      size={26}
                      aria-hidden="true"
                      className={`shrink-0 self-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-label={`${p.title} case study`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-10 pb-12 md:grid-cols-12 md:pl-16">
                        <div className="md:col-span-6">
                          <p className="display text-3xl md:text-4xl">{p.tagline}</p>
                          <dl className="mt-8 space-y-6">
                            <div>
                              <dt className="label">The problem</dt>
                              <dd className="mt-2 leading-relaxed">{p.problem}</dd>
                            </div>
                            <div>
                              <dt className="label">My contribution</dt>
                              <dd className="mt-2 leading-relaxed">{p.contribution}</dd>
                            </div>
                          </dl>
                          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
                            {p.stack.map((s) => (
                              <li key={s} className="rounded-full border border-line px-3 py-1 text-xs">
                                {s}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8 flex flex-wrap items-center gap-6">
                            {p.repo ? (
                              <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
                              >
                                <Github size={16} aria-hidden="true" />
                                View on GitHub
                                <span className="sr-only">: {p.title}</span>
                                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </a>
                            ) : (
                              <p className="text-sm text-muted">{p.repoNote}</p>
                            )}
                            {p.demo && (
                              <a href={p.demo} target="_blank" rel="noreferrer" className="link-u text-sm font-medium">
                                Live demo<span className="sr-only">: {p.title}</span>
                              </a>
                            )}
                          </div>
                          {p.note && <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">{p.note}</p>}
                        </div>

                        <div className="space-y-8 md:col-span-6">
                          <FlowDiagram steps={p.flow} caption={p.flowCaption} />
                          <div>
                            <h4 className="label mb-4">Implementation highlights</h4>
                            <ul className="space-y-3">
                              {p.details.map((d) => (
                                <li key={d} className="flex gap-3 leading-relaxed">
                                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-20">
          <h3 className="label mb-6">Archive</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {archive.map((a) => (
              <li key={a.title}>
                <a
                  href={a.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-sm border border-line p-6 transition-colors hover:border-ink"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="display text-3xl">{a.title}</span>
                    <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
                  <p className="label mt-4">{a.stack}</p>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
