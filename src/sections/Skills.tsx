import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper-2/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading number="04" eyebrow="Skills" title="Tools I" italic="work with." />

        <dl className="border-t border-ink">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.03} className="grid gap-4 border-b border-line py-6 md:grid-cols-12 md:gap-10 md:py-8">
              <dt className="label pt-1.5 md:col-span-3">{g.title}</dt>
              <dd className="md:col-span-9">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-xl md:text-2xl">
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
