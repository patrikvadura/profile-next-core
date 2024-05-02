'use client'

import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import * as CookieConsent from 'vanilla-cookieconsent'

import getConfig from './Config'
import addEventListeners from './Listeners'
import classes from './index.module.scss'

import 'vanilla-cookieconsent/dist/cookieconsent.css'

const ResetCookieConsent = () => {
  CookieConsent.reset(true)
  CookieConsent.run(getConfig())
}

const CookieConsentComponent = () => {
  useEffect(() => {
    addEventListeners()
    CookieConsent.run(getConfig())
  }, [])

  return (
    <>
      <div onClick={CookieConsent.showPreferences}>
        <Icon icon="material-symbols:cookie-outline" className={classes.icon} />
      </div>

      {/*<button type="button" onClick={ResetCookieConsent}>
        Reset cookie consent
      </button>*/}
    </>
  )
}

export default CookieConsentComponent
