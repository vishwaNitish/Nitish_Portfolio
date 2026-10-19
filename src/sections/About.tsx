import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading number="01" eyebrow="About" title="Building across" italic="the stack." />

        <div className="grid gap-14 md:grid-cols-12">
          <div className="space-y-6 md:col-span-6">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-xl text-lg leading-relaxed md:text-xl">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6">
                <div>
                  <dt className="label">Education</dt>
                  <dd className="mt-2 text-sm leading-relaxed">
                    {profile.education.degree}
                    <br />
                    <span className="text-muted">{profile.education.school}</span>
                  </dd>
                </div>
                <div>
                  <dt className="label">Period · CGPA</dt>
                  <dd className="mt-2 text-sm leading-relaxed">
                    {profile.education.period}
                    <br />
                    <span className="text-muted">{profile.education.cgpa}</span>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <h3 className="label mb-6">How I approach development</h3>
            </Reveal>
            <ol className="divide-y divide-line border-y border-line">
              {profile.approach.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.05} className="flex gap-5 py-4">
                  <span className="label w-6 shrink-0 pt-1 text-accent!">{String(i + 1).padStart(2, '0')}</span>
                  <span className="leading-snug">{item}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
