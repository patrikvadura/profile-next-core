'use client'
import React, { useEffect, useState } from 'react'
import QRCodeSVG from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Check } from '@/app/ui/Icons/Check'
import CustomizerLogo from '@/app/components/Customizer/Logo'

export default function DeviceCheckAlert() {
  const [url, setUrl] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000) // Reset po 3 sekundách
  }

  return (
    <div className="bg-primary flex flex-col justify-center items-center space-y-4 p-8 h-screen w-full text-center">
      <CustomizerLogo baseColor="#fff" accentColor="#05e988" />
      <h1 className="text-3xl font-bold text-secondary">Vaše zařízení není podporováno</h1>
      <p className="text-white text-opacity-70">
        Naše aplikace je kompatibilní pouze s desktopovými zařízeními. Prosím, otevřete tuto
        aplikaci na desktopovém zařízení.
      </p>
      <QRCodeSVG
        value={url}
        bgColor="transparent"
        fgColor="#ffffff"
        className="p-4 rounded-xl !size-36"
      />
      <CopyToClipboard text={url} onCopy={handleCopy}>
        {isCopied ? (
          <div className="flex flex-row space-x-2 items-center text-white">
            <Check className="text-secondary" /> <span className="font-bold">Zkopírováno!</span>
          </div>
        ) : (
          <div className="bg-white bg-opacity-20 text-white font-bold text-sm py-2 px-4 rounded-full">
            Zkopírovat do schránky
          </div>
        )}
      </CopyToClipboard>
    </div>
  )
}
