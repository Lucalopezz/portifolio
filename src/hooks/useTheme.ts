import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'

export function useTheme() {
  // index.html applies the initial theme before React loads to avoid a color flash.
  // Read that value instead of independently resolving the initial preference.
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)')

    function followSystem(event: MediaQueryListEvent) {
      try {
        // A saved choice takes precedence over subsequent operating system changes.
        const saved = localStorage.getItem(storageKey)
        if (saved === 'light' || saved === 'dark') return
      } catch {
        // Restricted storage must not prevent the system preference from working.
      }

      const next = event.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = next
      setTheme(next)
    }

    preference.addEventListener('change', followSystem)
    return () => preference.removeEventListener('change', followSystem)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setTheme(next)

    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // The visible theme still changes when persistence is blocked by the browser.
    }
  }

  return { theme, toggleTheme }
}
