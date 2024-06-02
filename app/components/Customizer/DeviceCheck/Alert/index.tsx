'use client'
import React, { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Check } from '@/app/ui/Icons/Check'
import { Icon } from '@iconify/react'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import Link from 'next/link'

export default function DeviceCheckAlert() {
  const [url, setUrl] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000) // Reset po 3 sekundách
  }

  const handleShowQRCode = () => {
    setShowQRCode(true)
  }

  return (
    <div className="bg-primary flex flex-col justify-center items-center space-y-4 p-8 h-screen w-full text-center">
      <div className="fixed top-0 left-0 p-4 w-full flex flex-row justify-between items-center">
        <CustomizerLogo textColor="#fff" symbolColor="#05e988" dotColor="#fca4ed" studio />

        <Link href="/" className="bg-secondary p-2 rounded-full">
          <Icon icon="material-symbols:arrow-back" className="text-primary text-lg" />
        </Link>
      </div>

      <Icon
        icon="material-symbols-light:devices-off-outline-rounded"
        className="!mt-2 text-white opacity-30 text-[80px]"
      />

      <h1 className="text-2xl font-bold text-secondary">
        Vaše zařízení <span className="text-accent underline decoration-wavy">není</span>{' '}
        podporováno
      </h1>

      <p className="text-sm text-white text-opacity-70">
        Naše aplikace je kompatibilní pouze s desktopovými zařízeními. Prosím, otevřete tuto
        aplikaci na desktopovém zařízení.
      </p>

      <CopyToClipboard text={url} onCopy={handleCopy}>
        {isCopied ? (
          <div className="flex flex-row space-x-2 items-center text-white">
            <Check className="text-secondary" /> <span className="font-bold">Zkopírováno</span>
          </div>
        ) : (
          <div className="bg-secondary text-primary font-bold text-sm py-2 px-4 rounded-full">
            Zkopírovat URL do schránky
          </div>
        )}
      </CopyToClipboard>

      {showQRCode ? (
        <QRCodeSVG
          value={url}
          bgColor="transparent"
          fgColor="#ffffff"
          className="p-4 rounded-xl !size-30"
        />
      ) : (
        <span
          onClick={handleShowQRCode}
          className="bg-white bg-opacity-20 text-white font-bold text-sm py-2 px-4 rounded-full"
        >
          Zobrazit QR kód
        </span>
      )}
    </div>
  )
}
