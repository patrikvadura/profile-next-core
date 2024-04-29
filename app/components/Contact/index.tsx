'use client'

import data from '@/app/lib/data.json'
import classes from './index.module.scss'
import { Icon } from '@iconify/react'
import { Link } from '@nextui-org/react'
import React from 'react'

export function Contact() {
  return (
    <div id="contact" className={classes.section}>
      <div className="flex flex-col items-center space-y-12">
        <p dangerouslySetInnerHTML={{ __html: data.contact.title }} className={classes.title} />

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-center text-center">
          <Link href={`mailto:${data.contact.email}`} className={classes.cta}>
            <Icon icon="material-symbols:alternate-email" />
            {data.contact.email}
          </Link>

          <Link href={`tel:${data.contact.phone}`} className={classes.cta}>
            <Icon icon="material-symbols:call" />
            {data.contact.phone}
          </Link>

          <p className="text-contact-title text-xl font-semibold tracking-wider">
            {data.contact.address}
          </p>
        </div>
      </div>
    </div>
  )
}
