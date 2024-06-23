import React from 'react'
import data from '@/app/lib/data.json'
import Link from 'next/link'
import { Form } from './Form'
import { AnimatedTitle } from '@/app/ui/Animations/Title'
import { ContactVariantProps } from '@/app/lib/variants'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

export function ContactVariant04({ layout, breakpoint, preview }: ContactVariantProps) {
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
            {data.contact.subtitle}
          </h4>

          <AnimatedTitle
            dangerouslySetInnerHTML={{ __html: data.contact.title }}
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
              href={`mailto:${data.contact.email}`}
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {data.contact.email}
            </Link>

            <Link
              href={`tel:${data.contact.phone}`}
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {data.contact.phone}
            </Link>

            <p
              className={getBreakpointStyles(
                'text-[var(--contact-typo)] text-lg font-semibold tracking-wider',
                breakpoint,
                preview,
              )}
            >
              {data.contact.address}
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.101727700836!2d17.457454976567984!3d49.06570097136109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471314370a9db87b%3A0xca48a5afeb22ac!2sStojanova%20508%2C%20686%2001%20Uhersk%C3%A9%20Hradi%C5%A1t%C4%9B%201!5e0!3m2!1scs!2scz!4v1719143840506!5m2!1scs!2scz"
          width="100%"
          height="100%"
          className="border-none min-h-[450px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
