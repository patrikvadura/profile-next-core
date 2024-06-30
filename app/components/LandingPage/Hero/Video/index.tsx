import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
}

export default function Video({ width, height }: Props) {
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
      <source
        src="https://profile-next-core.s3.eu-north-1.amazonaws.com/next-s3-uploads/hero_video_demo_01.mp4"
        type="video/mp4"
      />
      Váš prohlížeč nepodporuje video.
    </video>
  )
}
