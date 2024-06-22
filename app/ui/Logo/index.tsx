import React from 'react'
import data from '@/app/lib/data.json'
import Image from 'next/image'
import Link from 'next/link'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface Props {
  breakpoint?: string
  preview?: boolean
}

export default function Logo({ breakpoint = 'lg', preview = false }: Props) {
  return (
    <Link href="/">
      {data.profile.logo ? (
        <Image
          height={50}
          width={200}
          className={getBreakpointStyles(
            'h-32 z-30 transition duration-300 ease-in-out',
            breakpoint,
            preview,
          )}
          src={data.profile.logo}
          alt={data.profile.name}
          quality={75}
          sizes="(max-width: 480px) 100px, (max-width: 800px) 150px, 200px"
          loading="lazy"
        />
      ) : (
        <h3
          className={getBreakpointStyles(
            'text-[var(--global-secondary)] dark:text-white text-base md:text-lg lg:text-xl font-bold',
            breakpoint,
            preview,
          )}
        >
          {data.profile.name}{' '}
          <span className="font-normal opacity-75">| {data.profile.nameClaim}</span>
        </h3>
      )}
    </Link>
  )
}
