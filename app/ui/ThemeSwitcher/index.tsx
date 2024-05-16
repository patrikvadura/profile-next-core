'use client'
import { useEffect, useState } from 'react'
import { ThemeLight } from '@/app/ui/Icons/Theme/Light'
import { ThemeDark } from '@/app/ui/Icons/Theme/Dark'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light',
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme} aria-label="Přepněte schéma">
      {theme === 'dark' ? <ThemeLight size={20} className="fill-white" /> : <ThemeDark size={20} />}
    </button>
  )
}

export default ThemeSwitcher
