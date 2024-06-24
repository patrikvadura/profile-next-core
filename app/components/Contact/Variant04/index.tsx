import React from 'react'
import data from '@/app/lib/data.json'
import Link from 'next/link'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ContactVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ContactVariant04({
  layout,
  contactMap,
  contactMapAddress,
  contactContentTitle,
  contactContentSubtitle,
  contactContentInfoEmail,
  contactContentInfoPhone,
  contactContentInfoAddress,
  breakpoint,
  preview,
}: ContactVariantProps) {
  const layouts = {
    transparent: 'dark:bg-black',
    background: 'bg-[var(--contact-background)] dark:bg-black',
    border: 'dark:bg-black',
  }

  // @ts-ignore
  const layoutsClass = layouts[layout]

  const getGoogleMapsEmbedURL = (address: string | number | boolean) => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place'
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const encodedAddress = encodeURIComponent(address)
    return `${baseUrl}?key=${apiKey}&q=${encodedAddress}`
  }

  return (
    <div
      id="contact"
      className={getBreakpointStyles(
        `${layoutsClass} lg:min-h-screen w-full px-8 lg:px-0 py-16 md:py-32 overflow-hidden`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          'container md:min-h-[550px] lg:min-h-[650px] grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-12',
          breakpoint,
          preview,
        )}
      >
        <div
          className={getBreakpointStyles(
            'flex flex-col items-center md:items-start space-y-8 md:space-y-12',
            breakpoint,
            preview,
          )}
        >
          <h4
            className={getBreakpointStyles(
              'max-w-4xl mx-auto md:mx-0 text-[var(--contact-typo)] opacity-75 dark:text-white text-center md:text-left text-xl md:text-2xl',
              breakpoint,
              preview,
            )}
          >
            {contactContentSubtitle}
          </h4>

          <AnimatedTitle
            title={contactContentTitle}
            target="#contact"
            type="scale"
            origin={!preview ? 'scale-0' : ''}
            className={getBreakpointStyles(
              'max-w-4xl mx-auto text-[var(--contact-typo)] dark:text-white text-center md:text-left text-[32px] md:text-[50px] leading-[1.2] font-bold',
              breakpoint,
              preview,
            )}
            as="h3"
          />

          <div
            className={getBreakpointStyles(
              'flex flex-col space-y-4 items-center md:items-start text-center md:text-left',
              breakpoint,
              preview,
            )}
          >
            <Link
              href={`mailto:${contactContentInfoEmail}`}
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] dark:text-white text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {contactContentInfoEmail}
            </Link>

            <Link
              href={`tel:${contactContentInfoPhone}`}
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] dark:text-white text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {contactContentInfoPhone}
            </Link>

            <p
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] dark:text-white text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {contactContentInfoAddress}
            </p>
          </div>
        </div>

        {contactMap && contactMapAddress && (
          <iframe
            src={getGoogleMapsEmbedURL(contactMapAddress)}
            width="100%"
            height="100%"
            className="border-none min-h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  )
}
