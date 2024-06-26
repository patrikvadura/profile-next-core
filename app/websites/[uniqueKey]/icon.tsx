import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

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

function getInitials(siteName: string): string {
  return siteName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
}

export default async function Icon({ params }: { params: { uniqueKey: string } }) {
  const uniqueKey = params.uniqueKey

  if (!uniqueKey) {
    throw new Error('uniqueKey is required')
  }

  const websiteURL = (() => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}`
      }
      if (process.env.RENDER_EXTERNAL_URL) {
        return `https://${process.env.RENDER_EXTERNAL_URL}`
      }
    }
    return 'http://localhost:3000/'
  })()

  const url = `${websiteURL}/api/getData?uniqueKey=${uniqueKey}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const { data } = await res.json()

  const backgroundColor = data.globalSecondary || '#ffffff'
  const contrastColor = getContrastColor(backgroundColor)

  const label = getInitials(data.siteName || 'VS')

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: backgroundColor,
          width: '100%',
          height: '100%',
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          color: contrastColor,
        }}
      >
        {label}
      </div>
    ),
    {
      ...size,
    },
  )
}
