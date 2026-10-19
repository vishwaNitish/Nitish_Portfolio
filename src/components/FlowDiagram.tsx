interface Props {
  steps: string[]
  caption: string
}

/** A designed diagram built from verified pipeline steps. It is labelled as a diagram, not a screenshot. */
export function FlowDiagram({ steps, caption }: Props) {
  return (
    <figure className="rounded-sm border border-line bg-paper-2/60 p-5 md:p-6">
      <ol className="relative ml-1 border-l border-ink/30 md:ml-0 md:grid md:auto-cols-fr md:grid-flow-col md:gap-4 md:border-l-0">
        {steps.map((step, i) => (
          <li
            key={step}
            className="relative pb-5 pl-6 last:pb-0 md:border-t md:border-ink/30 md:pb-0 md:pl-0 md:pt-5 md:pr-2"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent md:left-0 md:top-[-5px]"
            />
            <span className="label block text-accent!">{String(i + 1).padStart(2, '0')}</span>
            <span className="mt-1 block text-sm leading-snug">{step}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 border-t border-line pt-3 text-xs text-muted">{caption}</figcaption>
    </figure>
  )
}
