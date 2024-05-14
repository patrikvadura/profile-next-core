'use client'

import React, { useEffect } from 'react'
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className={classes.icon}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.875.725-3.675T4.75 5.112t3.125-2.275t4-.862q.525 0 1.075.05t1.125.175q-.225 1.125.15 2.125t1.125 1.662t1.788.913t2.137-.125q-.65 1.475.188 2.825T21.95 11q.025.275.038.512t.012.513q0 2.05-.788 3.862t-2.137 3.175t-3.175 2.15T12 22m-1.5-12q.625 0 1.063-.437T12 8.5t-.437-1.062T10.5 7t-1.062.438T9 8.5t.438 1.063T10.5 10m-2 5q.625 0 1.063-.437T10 13.5t-.437-1.062T8.5 12t-1.062.438T7 13.5t.438 1.063T8.5 15m6.5 1q.425 0 .713-.288T16 15t-.288-.712T15 14t-.712.288T14 15t.288.713T15 16m-3 4q3.05 0 5.413-2.1T20 12.55q-1.25-.55-1.963-1.5t-.962-2.125q-1.925-.275-3.3-1.65t-1.7-3.3q-2-.05-3.512.725T6.037 6.688T4.512 9.325T4 12q0 3.325 2.338 5.663T12 20m0-8.1"
          />
        </svg>
      </div>

      {/*<button type="button" onClick={ResetCookieConsent}>
        Reset cookie consent
      </button>*/}
    </>
  )
}

export default CookieConsentComponent
