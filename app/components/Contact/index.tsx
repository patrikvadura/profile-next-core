import data from '@/app/lib/data.json'
import classes from './index.module.scss'
import React from 'react'
import Link from 'next/link'
import { Form } from '@/app/components/Contact/Form'
import { AnimatedTitle } from '@/app/ui/Animations/Title'

export function Contact() {
  return (
    <div id="contact" className={classes.section}>
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        <h4 className={classes.subtitle}>{data.contact.subtitle}</h4>

        <AnimatedTitle
          dangerouslySetInnerHTML={{ __html: data.contact.title }}
          target="#contact"
          type="scale"
          origin="scale-0"
          className={classes.title}
          as="h3"
        />

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center text-center">
          <Link href={`mailto:${data.contact.email}`} className={classes.cta}>
            {data.contact.email}
          </Link>

          <Link href={`tel:${data.contact.phone}`} className={classes.cta}>
            {data.contact.phone}
          </Link>

          <p className="text-contact-title text-xl font-semibold tracking-wider">
            {data.contact.address}
          </p>
        </div>

        <Form />
      </div>
    </div>
  )
}
