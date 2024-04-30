import data from '@/app/lib/data.json'
import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: data.meta.favicon.background,
          width: '100%',
          height: '100%',
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          color: data.meta.favicon.foreground,
        }}
      >
        {data.meta.favicon.label}
      </div>
    ),
    {
      ...size,
    },
  )
}
