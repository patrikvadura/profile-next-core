import React from 'react'
import data from '@/app/lib/data.json'
import Link from 'next/link'
import { Form } from './Form'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ContactVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ContactVariant01({
  layout,
  contactForm,
  contactRecipient,
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

  return (
    <div
      id="contact"
      className={getBreakpointStyles(
        `${layoutsClass} lg:min-h-screen w-full px-8 lg:px-0 py-16 md:py-32 flex items-center justify-center overflow-hidden`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          'flex flex-col items-center space-y-8 md:space-y-12',
          breakpoint,
          preview,
        )}
      >
        <h4
          className={getBreakpointStyles(
            'max-w-4xl mx-auto text-[var(--contact-typo)] opacity-75 dark:text-white text-center text-xl md:text-2xl',
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
            'max-w-4xl mx-auto text-[var(--contact-typo)] dark:text-white text-center text-[32px] md:text-[50px] leading-[1.2] font-bold',
            breakpoint,
            preview,
          )}
          as="h3"
        />

        <div
          className={getBreakpointStyles(
            'flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center text-center',
            breakpoint,
            preview,
          )}
        >
          <Link
            href={`mailto:${contactContentInfoEmail}`}
            className={getBreakpointStyles(
              'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
              breakpoint,
              preview,
            )}
          >
            {contactContentInfoEmail}
          </Link>

          <Link
            href={`tel:${contactContentInfoPhone}`}
            className={getBreakpointStyles(
              'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
              breakpoint,
              preview,
            )}
          >
            {contactContentInfoPhone}
          </Link>

          <p
            className={getBreakpointStyles(
              'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
              breakpoint,
              preview,
            )}
          >
            {contactContentInfoAddress}
          </p>
        </div>

        {contactForm && (
          <Form recipient={contactRecipient} breakpoint={breakpoint} preview={preview} />
        )}
      </div>
    </div>
  )
}
