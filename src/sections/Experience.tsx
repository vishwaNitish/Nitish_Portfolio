import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  const items = experience.filter((e) => e.published)
  return (
    <section id="experience" className="border-t border-line bg-paper-2/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading number="02" eyebrow="Experience" title="Where I’ve" italic="worked." />

        <ol className="relative">
          {items.map((e) => (
            <Reveal as="li" key={e.company} className="grid gap-6 border-t border-ink py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <p className="label">{e.period}</p>
                <p className="mt-2 text-sm text-muted">{e.location}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="display text-4xl md:text-6xl">{e.company}</h3>
                <p className="mt-2 text-lg text-accent">{e.role}</p>
                <p className="mt-6 max-w-2xl text-muted">{e.summary}</p>
                <ul className="mt-6 max-w-2xl space-y-3">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <li className="border-t border-ink" aria-hidden="true" />
        </ol>
      </div>
    </section>
  )
}
