import data from '@/app/lib/data.json'
import React from 'react'
import Link from 'next/link'
import CookieConsentComponent from '@/app/components/CookieConsent'

export default function FooterSocial() {
  return (
    <div className="flex flex-row items-center space-x-4">
      {data.profile.cookie ? <CookieConsentComponent /> : null}

      {data.footer.socialItems.map(
        (item: { label: string; icon: string; link: string; id: number }) => (
          <Link key={item.id} href={item.link} aria-label={item.label}>
            <div className="text-footer-text text-opacity-75 hover:text-opacity-100 text-2xl transition duration-300 ease-in-out">
              {item.icon}
            </div>
          </Link>
        ),
      )}
    </div>
  )
}
