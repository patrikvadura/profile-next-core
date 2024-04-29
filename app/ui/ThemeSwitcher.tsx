'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import React from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Button
        onClick={toggleTheme}
        isIconOnly
        radius="full"
        variant="light"
        aria-label="Změna tématu"
      >
        {theme === 'dark' ? (
          <Icon icon="lucide:sun" className="text-secondary dark:text-white text-lg" />
        ) : (
          <Icon icon="lucide:moon" className="text-secondary dark:text-white text-lg" />
        )}
      </Button>
    </div>
  )
}
