import data from '@/app/lib/data.json'
import React, { lazy, Suspense } from 'react'
import Link from 'next/link'
import { SocialItem, IconComponents } from '@/app/lib/types'
import { Facebook, Instagram } from '@/app/ui/Icons/Social'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

const LazyCookieConsentComponent = lazy(() =>
  import('@/app/components/CookieConsent').then(module => ({
    default: data.profile.cookie ? module.default : () => null,
  })),
)

const socialIcons: IconComponents = {
  Facebook,
  Instagram,
}

interface Props {
  breakpoint?: string
  preview?: boolean
}

export default function FooterSocial({ breakpoint = 'lg', preview = false }: Props) {
  return (
    <div
      className={getBreakpointStyles('flex flex-row items-center space-x-4', breakpoint, preview)}
    >
      {data.profile.cookie ? (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCookieConsentComponent />
        </Suspense>
      ) : null}

      {data.footer.socialItems.map((item: SocialItem, index) => {
        const IconComponent = socialIcons[item.label] || null

        return (
          <Link key={index} href={item.link} aria-label={item.label}>
            {IconComponent ? (
              <IconComponent
                className={getBreakpointStyles(
                  'fill-black dark:fill-white opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out',
                  breakpoint,
                  preview,
                )}
              />
            ) : (
              <div
                className={getBreakpointStyles(
                  'fill-black dark:fill-white opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out',
                  breakpoint,
                  preview,
                )}
              >
                {item.label}
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
