import React from 'react'
import data from '@/app/lib/data.json'
import { MenuItems } from '@/app/lib/types'
import Link from 'next/link'
import Logo from '@/app/ui/Logo'
import { MobileNav } from '@/app/ui/Header/MobileNav'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import classes from './index.module.scss'

export default function Header() {
  const menu: MenuItems[] = data.menuItems

  return (
    <div className={`${classes.navbar} bg-light-header-background dark:bg-dark-header-background`}>
      <div className="container flex flex-row justify-between items-center">
        <Logo />

        <div className="flex flex-row space-x-4">
          <div className="hidden sm:flex gap-8">
            {menu.map((item, index) => (
              <Link key={index} href={item.link ?? '#'} className={classes.link}>
                {item.title}
              </Link>
            ))}
          </div>

          <MobileNav menuItems={menu} />

          <div className="hidden md:inline">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
