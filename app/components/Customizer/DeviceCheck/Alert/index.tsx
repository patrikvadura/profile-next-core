'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import QRCode from 'qrcode.react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '@/app/ui/Button'

export default function DeviceCheckAlert({ children, className, style }: OptionContainerProps) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-4 h-screen w-full text-center">
      <h1 className="text-3xl font-bold">
        Omlouváme se, ale tato aplikace je dostupná pouze na desktopu.
      </h1>
      <p>Prosím, otevřete tuto aplikaci na desktopovém zařízení.</p>
      <QRCode value={url} className="!size-32" />
      <CopyToClipboard text={url}>
        <Button type="button" className="bg-gray-100 rounded-full text-sm !px-4 !py-2 !normal-case">
          Zkopírovat URL do schránky
        </Button>
      </CopyToClipboard>
    </div>
  )
}
