'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MenuItems } from '@/app/lib/types'
import { Menu } from '@/app/ui/Icons/Menu'
import { Close } from '@/app/ui/Icons/Close'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface MobileNavProps {
  menuItems: MenuItems[]
  breakpoint: string
  preview: boolean
}

export const MobileNav: React.FC<MobileNavProps> = ({
  menuItems,
  breakpoint = 'lg',
  preview = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={getBreakpointStyles('md:hidden', breakpoint, preview)}>
      <button
        onClick={toggleMenu}
        aria-label="Mobilní navigace"
        className="block bg-transparent text-[24px] text-header-accent dark:text-white no-underline cursor-pointer z-[999]"
      >
        {isOpen ? <Close /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-full h-[90vh] flex flex-col items-center justify-center space-y-3 bg-white p-8 dark:bg-black z-[1000]">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link ?? '#'}
              className="block py-2 text-header-menuItem dark:text-white text-2xl font-bold no-underline"
            >
              {item.title}
            </Link>
          ))}

          <ThemeSwitcher />
        </div>
      )}
    </div>
  )
}
