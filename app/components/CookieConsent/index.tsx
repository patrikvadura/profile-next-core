'use client'

import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import * as CookieConsent from 'vanilla-cookieconsent'

import getConfig from './Config'
import addEventListeners from './Listeners'

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
        <Icon
          icon="material-symbols:cookie-outline"
          className="mr-1 text-footer-text text-opacity-50 hover:text-opacity-100 text-2xl transition duration-300 ease-in-out"
        />
      </div>

      {/*<button type="button" onClick={ResetCookieConsent}>
        Reset cookie consent
      </button>*/}
    </>
  )
}

export default CookieConsentComponent
