import React from 'react'
import data from '@/app/lib/data.json'
import Link from 'next/link'
import { Form } from './Form'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ContactVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ContactVariant02({
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
  return (
    <div
      id="contact"
      className={getBreakpointStyles(
        `bg-[var(--contact-background)] dark:bg-black lg:min-h-screen w-full px-8 lg:px-0 py-16 md:py-32 overflow-hidden`,
        breakpoint,
        preview,
      )}
    >
      <div
        className={getBreakpointStyles(
          'container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12',
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

        {contactForm && (
          <Form recipient={contactRecipient} breakpoint={breakpoint} preview={preview} />
        )}
      </div>
    </div>
  )
}
