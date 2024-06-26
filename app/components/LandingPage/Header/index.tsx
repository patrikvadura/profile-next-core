import React, { useEffect, useState } from 'react'
import data from '@/app/lib/dataLandingPage.json'
import { MenuItemsLandingPage } from '@/app/lib/types'
import Link from 'next/link'
import { MobileNav } from '@/app/components/LandingPage/Header/MobileNav'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import classes from './index.module.scss'
import { Icon } from '@iconify/react'

export default function Header() {
  const menu: MenuItemsLandingPage[] = data.menu.items
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${classes.navbar} ${scrolled ? classes.navbarScrolled : ''}`}>
      <div className="container flex flex-row justify-between items-center">
        <CustomizerLogo textColor="#ffffff" symbolColor="#05e988" dotColor="#fca4ed" />

        <div className="flex flex-row space-x-4">
          <div className="hidden sm:flex gap-8">
            {menu.map((item, index) => (
              <Link key={index} href={item.link ?? '#'} className={`group ${classes.link}`}>
                <span className={classes.underline} />
                {item.title}
              </Link>
            ))}

            <Link
              href={data.menu.createLink.link}
              target="_blank"
              className={`group ${classes.linkCreate} ${classes.link}`}
            >
              <span className={classes.underline} />
              <Icon
                icon="material-symbols:add-circle-outline-rounded"
                className="text-2xl text-secondary mr-2"
              />
              {data.menu.createLink.title}
            </Link>
          </div>

          <MobileNav menuItems={menu} />

          <div className="hidden md:inline !text-white">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
