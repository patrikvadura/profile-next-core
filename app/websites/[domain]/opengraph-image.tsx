// app/websites/[domain]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

function getContrastColor(hex: string): string {
  hex = hex.replace('#', '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('')
  } else if (hex.length < 6) {
    hex = hex.padStart(6, '0')
  }

  let r = parseInt(hex.substring(0, 2), 16)
  let g = parseInt(hex.substring(2, 4), 16)
  let b = parseInt(hex.substring(4, 6), 16)

  let brightness = (r * 299 + g * 587 + b * 114) / 1000

  return brightness > 128 ? '#000000' : '#FFFFFF'
}

async function fetchData(domain: string) {
  const url = `${
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  }/api/fetchData?domain=${domain}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const result = await res.json()
  return result.data || null
}

export default async function Image({ params }: { params: { domain: string } }) {
  const domain = params.domain

  if (!domain) {
    throw new Error('domain is required')
  }

  let data = null
  try {
    data = await fetchData(domain)
  } catch (error) {
    console.error('Failed to fetch data', error)
    throw new Error('Failed to fetch data')
  }

  if (!data) {
    throw new Error('No data found')
  }

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

  const fontFamily = await fetch(fontFileUrl).then(res => res.arrayBuffer())

  const openGraphImageUrl = `${
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  }/assets/img/openGraph.jpg`

  const backgroundColor = data.globalSecondary || '#ffffff'
  const contrastColor = getContrastColor(backgroundColor)

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          backgroundColor: backgroundColor,
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
            backgroundImage: `url(${openGraphImageUrl})`,
            width: '100%',
            height: '100%',
            padding: '4rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            opacity: 0.2,
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
              color: contrastColor,
            }}
          >
            {data.siteName || ''}{' '}
            <span
              style={{
                marginLeft: '.5rem',
                opacity: '.75',
              }}
            >
              | {data.siteNameClaim || ''}
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
                color: contrastColor,
                opacity: '.75',
              }}
            >
              {data.heroContentSubtitle || ''}
            </h3>

            <h2
              style={{
                fontSize: 60,
                color: contrastColor,
              }}
            >
              {data.heroContentTitle || ''}
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
