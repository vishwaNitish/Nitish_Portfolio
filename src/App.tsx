import { MotionConfig } from 'motion/react'
import { Nav } from './components/Nav'
import { MotionPrefsProvider, useMotionPrefs } from './context/MotionPrefs'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Work } from './sections/Work'
import { Skills } from './sections/Skills'
import { Learning } from './sections/Learning'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function Shell() {
  const { enabled } = useMotionPrefs()
  return (
    // "always" strips transform animations site-wide when the visitor turns motion off.
    <MotionConfig reducedMotion={enabled ? 'never' : 'always'}>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default function App() {
  return (
    <MotionPrefsProvider>
      <Shell />
    </MotionPrefsProvider>
  )
}
