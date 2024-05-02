'use client'

import data from '@/app/lib/data.json'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Link,
} from '@nextui-org/react'
import { ThemeSwitcher } from '@/app/ui/ThemeSwitcher'
import classes from './index.module.scss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <Navbar
      className={`${classes.navbar} ${scrollPosition > 50 ? 'py-2' : 'py-4'}`}
      classNames={{
        wrapper: 'xl:px-0',
      }}
      maxWidth="xl"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/">
          {data.profile.logo ? (
            <Image
              className={`${classes.logo} ${
                scrollPosition > 50 ? '-bottom-6 scale-75' : 'bottom-0 scale-100'
              }`}
              src={`/${theme === 'dark' ? data.profile.logoDark : data.profile.logo}`}
              alt={data.profile.name}
            />
          ) : (
            <h3 className={classes.name}>
              {data.profile.name} <span>| {data.profile.nameClaim}</span>
            </h3>
          )}
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {data.menuItems.map((item: { title: string; link: string; id: number }) => (
          <NavbarItem key={item.id}>
            <Link href={item.link} className={classes.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className="hidden md:inline">
        <ThemeSwitcher />
      </div>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Zavřít' : 'Otevřít'}
        className={classes.menuToggle}
      />

      <NavbarMenu className="bg-header-backgroundMobileToggle flex flex-col justify-center items-center">
        {data.menuItems.map((item: { title: string; link: string; id: number }) => (
          <NavbarMenuItem key={item.id}>
            <Link href={item.link} className={`${classes.link} ${classes.linkMobile}`}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}

        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
