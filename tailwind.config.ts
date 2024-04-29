import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/assets/mask.svg',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#5B319B',
            secondary: '#191A44',
            header: {
              name: '#191A44',
              nameClaim: '#000',
              link: '#191A44',
              linkHover: '#5B319B',
              background: '#fff',
            },
            hero: {
              title: '#fff',
              subtitle: '#fff',
              largeTitle: '#fff',
              text: '#fff',
              buttonBackground: '#5B319B',
              buttonText: '#fff',
              background: '#191A44',
              gradientFrom: '#1A1A45FF',
              gradientTo: '#13133099',
            },
            about: {
              title: '#191A44',
              description: '#000',
              divider: '#5B319B',
              background: '#EDF1F4',
              buttonBackground: '#5B319B',
              buttonText: '#fff',
            },
            contact: {
              title: '#191A44',
              highlight: '#5B319B',
              background: '#fff',
            },
          },
        },
        dark: {
          colors: {
            primary: '#191A44',
            secondary: '#5B319B',
            header: {
              name: '#fff',
              nameClaim: '#fff',
              link: '#fff',
              linkHover: '#fff',
              background: '#000',
            },
            hero: {
              title: '#fff',
              subtitle: '#fff',
              largeTitle: '#fff',
              text: '#fff',
              buttonBackground: '#5B319B',
              buttonText: '#fff',
              background: '#000',
              gradientFrom: '#000',
              gradientTo: '#13133099',
            },
            about: {
              title: '#fff',
              description: '#fff',
              divider: '#5B319B',
              background: '#13133099',
              buttonBackground: '#5B319B',
              buttonText: '#fff',
            },
            contact: {
              title: '#191A44',
              highlight: '#5B319B',
              background: '#fff',
            },
          },
        },
      },
    }),
  ],
}

export default config
