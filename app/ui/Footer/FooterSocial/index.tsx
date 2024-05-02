'use client'

import data from '@/app/lib/data.json'

import React from 'react'
import { Icon } from '@iconify/react'
import CookieConsentComponent from '@/app/components/CookieConsent'
import { Link } from '@nextui-org/react'

export default function FooterSocial() {
  return (
    <div className="flex flex-row items-center space-x-4">
      {data.profile.cookie ? <CookieConsentComponent /> : null}

      {data.footer.socialItems.map(
        (item: { label: string; icon: string; link: string; id: number }) => (
          <Link key={item.id} href={item.link} aria-label={item.label}>
            <Icon
              icon={item.icon}
              className="text-footer-text text-opacity-50 hover:text-opacity-100 text-2xl transition duration-300 ease-in-out"
            />
          </Link>
        ),
      )}
    </div>
  )
}
