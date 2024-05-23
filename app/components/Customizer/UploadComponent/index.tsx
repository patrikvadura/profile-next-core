import React, { useState } from 'react'
import { useS3Upload } from 'next-s3-upload'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import axios from 'axios'
import Button from '@/app/ui/Button'

type UploadComponentProps = {
  imageUrl: string
  imageWidth: number
  imageHeight: number
  setImageUrl: (url: string) => void
  setImageWidth: (width: number | undefined) => void
  setImageHeight: (height: number | undefined) => void
}

const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => {
      resolve({ width: img.width, height: img.height })
    }
    img.onerror = reject
    img.src = url
  })
}

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2 MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export default function UploadComponent({
  imageUrl,
  imageWidth,
  imageHeight,
  setImageUrl,
  setImageWidth,
  setImageHeight,
}: UploadComponentProps) {
  let { uploadToS3 } = useS3Upload()
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  let handleFileChange = async (event: { target: { files: any[] } }) => {
    let file = event.target.files[0]

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      alert(
        'Váš soubor je v nesprávném formátu. Prosím nahrajte soubor v jednom z následujících formátů - .jpg, .png, .webp.',
      )
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      alert(
        'Maximální povolená velikost souboru je 2 MB. Prosím nahrajte obrázek ve správné velikosti. Ke zmenšení fotografie můžete použít některý z online nástrojů, např. https://imageresizer.com',
      )
      return
    }

    setOriginalFile(file)
    let { url } = await uploadToS3(file)
    let { width, height } = await getImageDimensions(url)

    setImageWidth(width)
    setImageHeight(height)
    setImageUrl(url)
  }

  const handleRemoveBackground = async () => {
    if (!originalFile) return

    setIsProcessing(true)

    try {
      const response = await axios.post('/api/remove-background', {
        imageUrl,
      })

      const processedImageUrl = response.data.url

      if (!processedImageUrl) {
        throw new Error('Processed image URL is undefined')
      }

      let { width, height } = await getImageDimensions(processedImageUrl)

      setImageWidth(width)
      setImageHeight(height)
      setImageUrl(processedImageUrl)
    } catch (error) {
      console.error('Error removing background:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="parent-container min-h-20 p-4 flex justify-start items-center w-full cursor-pointer rounded-xl bg-gray-50 border-dashed border-2 border-gray-200 relative">
          <input
            type="file"
            id="input-file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept=".jpg, .jpeg, .png, .webp" // Limit accepted file types
            //@ts-ignore
            onChange={handleFileChange}
          />
          <div className="flex flex-row justify-start items-center">
            <div className="mr-4">
              {imageUrl && imageWidth && imageHeight ? (
                <div className="flex items-center justify-center">
                  <div className="!size-16 rounded-full border-2 border-gray-200 overflow-hidden">
                    <Image
                      src={imageUrl}
                      width={imageWidth}
                      height={imageHeight}
                      quality={75}
                      priority={true}
                      alt="Uploaded"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              ) : (
                <Icon icon="iconamoon:cloud-upload" className="text-2xl" />
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-bold file_name">Nahrát obrázek</p>
              <p className="text-sm text-gray-500">
                <span className="text-black underline">vyberte</span> nebo přetáhněte svůj soubor
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <p className="mt-3 text-xs text-gray-500">
            Doporučujeme formáty .jpg, .png, .webp. o maximální velikosti 2 MB.
          </p>

          {originalFile && (
            <Button
              onClick={handleRemoveBackground}
              className="mt-3 !p-0 text-xs rounded-full bg-none underline !normal-case"
              disabled={isProcessing}
            >
              {isProcessing ? 'Probíhá odstraňování pozadí...' : 'Odstranit pozadí'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
