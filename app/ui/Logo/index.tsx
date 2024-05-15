import React from 'react'
import data from '@/app/lib/data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      {data.profile.logo ? (
        <Image
          height={50}
          width={200}
          className="rounded-none h-32 z-30 transition duration-300 ease-in-out"
          src={data.profile.logo}
          alt={data.profile.name}
          quality={75}
          sizes="(max-width: 480px) 100px, (max-width: 800px) 150px, 200px"
          loading="lazy"
        />
      ) : (
        <h3 className="text-light-header-name text-base md:text-lg lg:text-xl font-bold">
          {data.profile.name}{' '}
          <span className="text-light-header-nameClaim font-normal opacity-50">
            | {data.profile.nameClaim}
          </span>
        </h3>
      )}
    </Link>
  )
}
