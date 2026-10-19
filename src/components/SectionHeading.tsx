import { Reveal } from './Reveal'

interface Props {
  number: string
  eyebrow: string
  title: string
  italic?: string
}

export function SectionHeading({ number, eyebrow, title, italic }: Props) {
  return (
    <div className="mb-12 md:mb-20">
      <Reveal className="mb-6 flex items-center gap-4">
        <span className="label text-accent!">{number}</span>
        <span className="h-px w-12 bg-line" aria-hidden="true" />
        <span className="label">{eyebrow}</span>
      </Reveal>
      <Reveal as="h2" delay={0.05} className="display text-[clamp(2.6rem,8vw,6.5rem)]">
        {title}
        {italic && <em className="text-accent"> {italic}</em>}
      </Reveal>
    </div>
  )
}
