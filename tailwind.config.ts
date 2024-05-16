import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', "[class~='dark']"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        favicon: {
          background: '#191A44',
          foreground: '#fff',
        },
        primary: '#5B319B',
        secondary: '#191A44',
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
}

export default config
