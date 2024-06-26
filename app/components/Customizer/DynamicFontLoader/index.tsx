'use client'
import { useEffect } from 'react'

interface DynamicFontLoaderProps {
  fontName: string
  fontWeights: string
}

const DynamicFontLoader: React.FC<DynamicFontLoaderProps> = ({ fontName, fontWeights }) => {
  useEffect(() => {
    const formattedFontName = fontName.replace(' ', '+')
    const formattedFontWeights = fontWeights.replace(' ', '+')
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:wght@${formattedFontWeights}&display=swap`

    const link = document.createElement('link')
    link.href = fontUrl
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)

    const style = document.createElement('style')
    style.innerText = `.fontDefault { font-family: "${fontName}", serif !important; }`
    document.head.appendChild(style)

    // Clean up on unmount
    return () => {
      document.head.removeChild(link)
      document.head.removeChild(style)
    }
  }, [fontName])

  return null
}

export default DynamicFontLoader
