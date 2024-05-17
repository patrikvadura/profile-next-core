import data from '@/app/lib/data.json'
import { ImageResponse } from 'next/og'

const websiteURL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000/'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  const font: string = 'Hind'
  const fontUrl = `https://fonts.googleapis.com/css2?family=${font}:wght@700&display=swap`
  const fontResponse = await fetch(fontUrl)
  const fontCss = await fontResponse.text()

  const fontFileUrlMatch = fontCss.match(
    /url\((https:\/\/fonts\.gstatic\.com\/s\/hind\/v\d+\/[^)]+)\)/,
  )

  if (!fontFileUrlMatch) {
    throw new Error('Font file URL not found in Google Fonts CSS')
  }
  const fontFileUrl = fontFileUrlMatch[1]

  const fontFamily = fetch(fontFileUrl).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          backgroundColor: data.meta.openGraph.background,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          fontFamily: `${font}, sans-serif`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundImage: `url(${websiteURL}${data.meta.openGraph.image})`,
            width: '100%',
            height: '100%',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            opacity: data.meta.openGraph.imageOpacity || 0.2,
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <h3
            style={{
              fontSize: 24,
              color: data.meta.openGraph.foreground,
            }}
          >
            {data.profile.name}{' '}
            <span
              style={{
                marginLeft: '.5rem',
                opacity: '.75',
              }}
            >
              | {data.profile.nameClaim}
            </span>
          </h3>

          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
            }}
          >
            <h3
              style={{
                fontSize: 24,
                color: data.meta.openGraph.foreground,
                opacity: '.75',
              }}
            >
              {data.hero.subtitle}
            </h3>

            <h2
              style={{
                fontSize: 60,
                color: data.meta.openGraph.foreground,
              }}
            >
              {data.hero.title}
            </h2>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: font,
          data: await fontFamily,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
