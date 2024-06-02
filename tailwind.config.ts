const { nextui } = require('@nextui-org/react')
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', "[class~='dark']"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#28349a',
        secondary: '#05e988',
        accent: '#fca4ed',
        header: {
          background: '#fff',
          accent: '#191A44',
          name: '#191A44',
          menuItem: '#191A44',
        },
        hero: {
          background: '#191A44',
          accent: {
            DEFAULT: '#5B319B',
            foreground: '#fff',
          },
          typo: {
            DEFAULT: '#fff',
            lg: '#fff',
          },
        },
        about: {
          background: '#EDF1F4',
          accent: {
            DEFAULT: '#5B319B',
            foreground: '#fff',
          },
          typo: '#191A44',
        },
        service: {
          background: '#fff',
          accent: {
            DEFAULT: '#5B319B',
            foreground: '#fff',
          },
          box: {
            background: '#EDF1F4',
            typo: '#fff',
            icon: '#5B319B',
          },
          typo: '#191A44',
        },
        reference: {
          background: '#191A44',
          accent: {
            DEFAULT: '#5B319B',
            foreground: '#fff',
          },
          typo: {
            DEFAULT: '#fff',
            lg: '#fff',
          },
        },
        contact: {
          background: '#fff',
          accent: {
            DEFAULT: '#5B319B',
            foreground: '#fff',
          },
          typo: '#191A44',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}

export default config
