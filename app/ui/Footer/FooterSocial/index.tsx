import data from '@/app/lib/data.json'
import React, { lazy, Suspense } from 'react'
import Link from 'next/link'
import { SocialItem, IconComponents } from '@/app/lib/types'
import { Facebook, Instagram } from '@/app/ui/Icons/Social'

const LazyCookieConsentComponent = lazy(() =>
  import('@/app/components/CookieConsent').then(module => ({
    default: data.profile.cookie ? module.default : () => null,
  })),
)

const socialIcons: IconComponents = {
  Facebook,
  Instagram,
}

export default function FooterSocial() {
  return (
    <div className="flex flex-row items-center space-x-4">
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
              <IconComponent className="fill-black dark:fill-white opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out" />
            ) : (
              <div className="fill-black dark:fill-white opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out">
                {item.label}
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
