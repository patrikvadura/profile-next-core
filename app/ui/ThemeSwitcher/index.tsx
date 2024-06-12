'use client'
import { useEffect, useState } from 'react'
import { ThemeSwitcherProps } from '@/app/lib/types'
import { ThemeLight } from '@/app/ui/Icons/Theme/Light'
import { ThemeDark } from '@/app/ui/Icons/Theme/Dark'

const ThemeSwitcher = ({ previewMode }: ThemeSwitcherProps) => {
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

    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme')
      if (newTheme) {
        setTheme(newTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    window.dispatchEvent(new Event('storage')) // Vyvolání události `storage` pro synchronizaci
  }

  return (
    <button onClick={toggleTheme} aria-label="Přepněte schéma">
      {theme === 'dark' ? (
        <ThemeLight size={20} className={`${previewMode ? '' : 'text-white'}`} />
      ) : (
        <ThemeDark size={20} />
      )}
    </button>
  )
}

export default ThemeSwitcher
