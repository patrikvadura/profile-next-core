'use client'
import data from '@/app/lib/data.json'
import React, { lazy, Suspense } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

const LazyCookieConsentComponent = lazy(() =>
  import('@/app/components/CookieConsent').then(module => ({
    default: data.profile.cookie ? module.default : () => null,
  })),
)

interface Props {
  cookieShow?: any
  boxes?: any
  breakpoint?: string
  preview?: boolean
}

export default function FooterSocial({
  cookieShow,
  boxes,
  breakpoint = 'lg',
  preview = false,
}: Props) {
  return (
    <div
      className={getBreakpointStyles('flex flex-row items-center space-x-4', breakpoint, preview)}
    >
      {cookieShow && data.profile.cookie ? (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCookieConsentComponent />
        </Suspense>
      ) : null}

      {boxes &&
        //@ts-ignore
        boxes.map((box, index) => (
          <Link key={index} href={box.href} aria-label={box.title}>
            <Icon
              icon={box.icon}
              className={getBreakpointStyles(
                'fill-black dark:fill-white opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out',
                breakpoint,
                preview,
              )}
            />
          </Link>
        ))}
    </div>
  )
}
