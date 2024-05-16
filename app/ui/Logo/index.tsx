import React from 'react'
import data from '@/app/lib/data.json'
import Image from 'next/image'
import Link from 'next/link'
import classes from './index.module.scss'

export default function Logo() {
  return (
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
  )
}
