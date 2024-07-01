import { ImageResponse } from 'next/og'
import { MongoClient } from 'mongodb'

export const runtime = 'nodejs' // Změňte runtime na nodejs

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

async function fetchData(domain: string) {
  const client = await MongoClient.connect(process.env.MONGODB_URI!)
  const db = client.db('studioDatabase')
  const collection = db.collection('websitesData')

  const data = await collection.findOne({ domain: domain })
  client.close()

  if (!data) {
    throw new Error('Data not found')
  }

  return data
}

export default async function Icon({ params }: { params: { domain: string } }) {
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
