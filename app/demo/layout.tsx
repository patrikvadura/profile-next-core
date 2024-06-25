import React from 'react'
import Providers from '@/app/demo/providers'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      <Providers>{children}</Providers>
    </html>
  )
}
