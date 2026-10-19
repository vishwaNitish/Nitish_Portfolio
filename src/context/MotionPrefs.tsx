import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

interface MotionPrefs {
  enabled: boolean
  toggle: () => void
}

const MotionPrefsContext = createContext<MotionPrefs>({ enabled: true, toggle: () => {} })

/** Saved choice wins; otherwise follow the operating system's reduced-motion setting. */
function initialEnabled(): boolean {
  try {
    const saved = localStorage.getItem('motion')
    if (saved === 'off') return false
    if (saved === 'on') return true
  } catch {
    /* storage can be blocked; fall through */
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function MotionPrefsProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(initialEnabled)

  useEffect(() => {
    document.documentElement.classList.toggle('motion-off', !enabled)
  }, [enabled])

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      try {
        localStorage.setItem('motion', next ? 'on' : 'off')
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle])
  return <MotionPrefsContext.Provider value={value}>{children}</MotionPrefsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMotionPrefs = () => useContext(MotionPrefsContext)
