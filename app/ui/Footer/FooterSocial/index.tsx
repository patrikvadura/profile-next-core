import data from '@/app/lib/data.json'
import React from 'react'
import Link from 'next/link'
import CookieConsentComponent from '@/app/components/CookieConsent'
import { SocialItem, IconComponents } from '@/app/lib/types'
import { Facebook, Instagram } from '@/app/ui/Icons/Social'

const socialIcons: IconComponents = {
  Facebook,
  Instagram,
}

export default function FooterSocial() {
  return (
    <div className="flex flex-row items-center space-x-4">
      {data.profile.cookie ? <CookieConsentComponent /> : null}

      {data.footer.socialItems.map((item: SocialItem, index) => {
        const IconComponent = socialIcons[item.label] || null

        return (
          <Link key={index} href={item.link} aria-label={item.label}>
            {IconComponent ? (
              <IconComponent className="fill-black opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out" />
            ) : (
              <div className="fill-black opacity-75 hover:opacity-100 text-2xl transition duration-300 ease-in-out">
                {item.label}
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
