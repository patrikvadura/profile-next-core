import data from '@/app/lib/data.json'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from '@/app/ui/ThemeSwitcher'
import classes from './index.module.scss'

export default function Header() {
  return (
    <div className={`${classes.navbar} bg-light-header-background dark:bg-dark-header-background`}>
      <div className="container flex flex-row justify-between">
        <Link href="/">
          {data.profile.logo ? (
            <Image
              height={50}
              width={200}
              className={classes.logo}
              src={data.profile.logo}
              alt={data.profile.name}
              quality={75}
              sizes="(max-width: 480px) 100px, (max-width: 800px) 150px, 200px"
              loading="lazy"
            />
          ) : (
            <h3 className={classes.name}>
              {data.profile.name} <span>| {data.profile.nameClaim}</span>
            </h3>
          )}
        </Link>

        <div className="flex flex-row space-x-4">
          <div className="hidden sm:flex gap-8">
            {data.menuItems.map((item: { title: string; link: string; id: number }) => (
              <Link key={item.id} href={item.link} className={classes.link}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:inline">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
