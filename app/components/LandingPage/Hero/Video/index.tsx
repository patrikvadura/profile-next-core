import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  video?: string
}

export default function Video({ width, height, video }: Props) {
  return (
    <video
      width={width}
      height={height}
      loop
      autoPlay
      playsInline
      preload="none"
      aria-label="Ukázka VisioSnap - studio."
    >
      <source src={video} type="video/mp4" />
      Váš prohlížeč nepodporuje video.
    </video>
  )
}
