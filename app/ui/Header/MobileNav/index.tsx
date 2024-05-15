'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MenuItems } from '@/app/lib/types'
import { Menu } from '@/app/ui/Icons/Menu'
import { Close } from '@/app/ui/Icons/Close'
import classes from './index.module.scss'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'

interface MobileNavProps {
  menuItems: MenuItems[]
}

export const MobileNav: React.FC<MobileNavProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sm:hidden">
      <button onClick={toggleMenu} className={classes.toggleButton}>
        {isOpen ? <Close /> : <Menu />}
      </button>

      {isOpen && (
        <div className={`${classes.menu}`}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link ?? '#'} className={`${classes.link}`}>
              {item.title}
            </Link>
          ))}

          <ThemeSwitcher />
        </div>
      )}
    </div>
  )
}
