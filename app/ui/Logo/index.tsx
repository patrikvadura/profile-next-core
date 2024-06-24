import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface Props {
  siteName: string
  siteNameClaim: string
  logoImage: boolean | null
  logoImageUrl: string
  logoImageHeight: number | undefined | any
  logoImageWidth: number | undefined | any
  logoImageSize: number | undefined | any
  breakpoint?: string
  preview?: boolean
}

export default function Logo({
  siteName,
  siteNameClaim,
  logoImage,
  logoImageUrl,
  logoImageWidth,
  logoImageHeight,
  logoImageSize,
  breakpoint = 'lg',
  preview = false,
}: Props) {
  return (
    <Link href="/">
      {logoImage ? (
        <Image
          width={logoImageWidth || 35}
          height={logoImageHeight || 160}
          className={getBreakpointStyles(
            'max-w-none max-h-none text-left z-30 transition duration-300 ease-in-out',
            breakpoint,
            preview,
          )}
          style={{
            width: logoImageSize,
          }}
          src={logoImageUrl}
          alt={siteName || 'VisioSnap'}
          quality={75}
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
          {siteName} <span className="font-normal opacity-75">| {siteNameClaim}</span>
        </h3>
      )}
    </Link>
  )
}
