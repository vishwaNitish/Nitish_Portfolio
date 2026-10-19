import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useMotionPrefs } from '../context/MotionPrefs'

const GLYPHS = '01/—_<>+*#'

interface Props {
  href: string
  text: string
  className?: string
  icon?: ReactNode
  external?: boolean
}

/** A link whose letters scramble and then resolve on hover or keyboard focus. */
export function ScrambleLink({ href, text, className, icon, external }: Props) {
  const { enabled } = useMotionPrefs()
  const [shown, setShown] = useState(text)
  const raf = useRef(0)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const run = () => {
    if (!enabled) return
    cancelAnimationFrame(raf.current)
    const start = performance.now()
    const duration = 560
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / duration)
      const settled = Math.floor(k * text.length)
      setShown(
        text
          .split('')
          .map((ch, i) => (ch === ' ' || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(''),
      )
      if (k < 1) raf.current = requestAnimationFrame(tick)
      else setShown(text)
    }
    raf.current = requestAnimationFrame(tick)
  }

  return (
    <a
      href={href}
      onMouseEnter={run}
      onFocus={run}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={className}
    >
      {/* The real text reserves the width so nothing shifts while letters scramble. */}
      <span className="relative inline-block">
        <span className="opacity-0">{text}</span>
        <span className="absolute inset-0 whitespace-nowrap" aria-hidden="true">
          {shown}
        </span>
      </span>
      {icon}
    </a>
  )
}
