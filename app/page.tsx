import React from 'react'
import CustomizerLogo from '@/app/components/Customizer/Logo'
import Link from 'next/link'
import Image from 'next/image'

export default function Preview() {
  return (
    <>
      <div className="relative bg-primary h-screen flex flex-col justify-end items-start">
        <Image
          src="https://profile-next-core.s3.eu-north-1.amazonaws.com/images/andrej-lisakov-W3RqrBgKEro-unsplash.jpeg"
          width={1920}
          height={1920}
          className="absolute left-0 top-0 mx-auto h-full w-full object-cover object-center z-0 opacity-70 mix-blend-multiply"
          alt="VisioSnap"
        />

        <div className="fixed top-0 left-0 w-full p-4 flex flex-row justify-between items-center">
          <CustomizerLogo textColor="#ffffff" symbolColor="#05e988" dotColor="#fca4ed" studio />

          <div className="flex flex-row items-center space-x-4">
            <Link href="#" className="text-sm underline">
              Požádat o pomoc
            </Link>
          </div>
        </div>

        <div className="mb-8 p-4 relative flex flex-col items-start space-y-8 z-1">
          <h1 className="text-white text-5xl font-bold">
            Levné a pohodlné řešení{' '}
            <span className="text-accent underline decoration-wavy">webové vizitky</span>
          </h1>

          <div className="flex flex-row flex-wrap space-x-2">
            <Link
              href="/studio"
              className="bg-secondary text-primary font-bold py-2 px-4 rounded-full"
            >
              Spustit online builder
            </Link>

            <Link
              href="/"
              className="bg-white bg-opacity-20 text-white font-bold py-2 px-4 rounded-full"
            >
              Ceník
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
