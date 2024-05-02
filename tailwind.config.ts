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
    extend: {
      colors: {
        favicon: {
          background: '#191A44',
          foreground: '#fff',
        },
      },
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
              LinkMobileToggle: '#191A44',
              background: '#fff',
              backgroundMobileToggle: '#fff',
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
            service: {
              title: '#191A44',
              subtitle: '#191A44',
              text: '#000',
              background: '#EDF1F4',
              backgroundHover: '#d2d6d8',
              border: '#ededed',
              borderHoverBackground: '#ededed',
            },
            reference: {
              title: '#fff',
              description: '#fff',
              largeTitle: '#fff',
              dots: '#fff',
              symbol: '#5B319B',
              background: '#191A44',
            },
            contact: {
              title: '#191A44',
              subtitle: '#191A44',
              highlight: '#5B319B',
            },
            footer: {
              text: '#000',
              logo: '#000',
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
              LinkMobileToggle: '#fff',
              background: '#000',
              backgroundMobileToggle: '#000',
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
            service: {
              title: '#fff',
              subtitle: '#fff',
              text: '#fff',
              background: '#13133099',
              backgroundHover: '#131330D1',
              border: '#13133099',
              borderHoverBackground: '#13133099',
            },
            reference: {
              title: '#fff',
              description: '#fff',
              largeTitle: '#fff',
              dots: '#fff',
              symbol: '#5B319B',
              background: '#000',
            },
            contact: {
              title: '#fff',
              subtitle: '#fff',
              highlight: '#5B319B',
            },
            footer: {
              text: '#fff',
              logo: '#fff',
            },
          },
        },
      },
    }),
  ],
}

export default config
