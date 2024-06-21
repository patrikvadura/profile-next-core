import React from 'react'
import data from '@/app/lib/data.json'
import { MenuItems } from '@/app/lib/types'
import Link from 'next/link'
import Logo from '@/app/ui/Logo'
import { MobileNav } from '@/app/ui/Header/MobileNav'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface Props {
  breakpoint?: string
  preview?: boolean
}

export default function Header({ breakpoint = 'lg', preview = false }: Props) {
  const menu: MenuItems[] = data.menuItems

  return (
    <div
      className={getBreakpointStyles(
        'fixed w-full py-8 px-4 md:px-0 transition duration-300 ease-in-out z-50 bg-header-background',
        breakpoint,
        preview,
      )}
    >
      <div className="container flex flex-row justify-between items-center">
        <Logo />

        <div className="flex flex-row space-x-4">
          <div className={getBreakpointStyles('gap-8 hidden md:flex lg:flex', breakpoint, preview)}>
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.link ?? '#'}
                className="text-header-menuItem dark:text-white hover:brightness-50 font-bold"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <MobileNav menuItems={menu} breakpoint={breakpoint} preview={preview} />

          <div className={getBreakpointStyles('hidden md:inline', breakpoint, preview)}>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
