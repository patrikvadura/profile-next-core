import React from 'react'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs-CZ" className="scroll-smooth" suppressHydrationWarning>
      {children}
    </html>
  )
}
