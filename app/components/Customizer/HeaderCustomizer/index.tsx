'use client'

import React, { useEffect, useState } from 'react'
import data from '@/app/lib/dataCustomizer.json'
import { MenuItems } from '@/app/lib/types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import classes from './index.module.scss'
import { Icon } from '@iconify/react'

export default function HeaderCustomizer() {
  const menu: MenuItems[] = data.menu.items
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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
        <CustomizerLogo textColor="#ffffff" symbolColor="#05e988" dotColor="#fca4ed" studio />

        <div className="hidden sm:flex gap-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link ?? '#'}
              className={`group ${classes.link} ${
                pathname === item.link ? classes.linkActive : ''
              }`}
            >
              <span className={classes.underline} />
              <Icon
                icon={item.icon}
                className={`text-2xl mr-2 ${pathname === item.link ? classes.linkActiveIcon : ''}`}
              />
              {item.title}
            </Link>
          ))}

          <Link
            href={data.menu.createLink.link}
            className={`group text-secondary ${classes.link} ${
              pathname === data.menu.createLink.link ? classes.linkCreateActive : ''
            }`}
          >
            <span className={classes.underline} />
            <Icon
              icon="material-symbols:add-circle-outline-rounded"
              className={`text-2xl text-secondary mr-2 ${
                pathname === data.menu.createLink.link ? classes.linkCreateActiveIcon : ''
              }`}
            />
            {data.menu.createLink.title}
          </Link>

          <div className="flex flex-row items-center text-white text-sm text-opacity-50 border-l-2 border-white border-opacity-10 pl-4 space-x-4">
            <Image
              src="/assets/img/studio/profile_dummy.jpg"
              width={100}
              height={100}
              alt="Profile"
              className="size-6 rounded-full"
            />

            <span>Patrik Vaďura</span>
          </div>

          <Link
            href="/"
            className="flex flex-row items-center text-white text-sm text-opacity-50 hover:text-opacity-100 transiton duration-300 ease-in-out"
          >
            <Icon icon="material-symbols:logout" className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  )
}
