import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import axios from 'axios'
import sharp from 'sharp'
import FormData from 'form-data'

const s3UploadKey = process.env.S3_UPLOAD_KEY
const s3UploadSecret = process.env.S3_UPLOAD_SECRET
const s3UploadBucket = process.env.S3_UPLOAD_BUCKET
const s3UploadRegion = process.env.S3_UPLOAD_REGION
const removeBgApiKey = process.env.REMOVE_BG_API_KEY

if (!s3UploadKey || !s3UploadSecret || !s3UploadBucket || !s3UploadRegion || !removeBgApiKey) {
  throw new Error('Missing required environment variables')
}

const s3 = new S3Client({
  credentials: {
    accessKeyId: s3UploadKey,
    secretAccessKey: s3UploadSecret,
  },
  region: s3UploadRegion,
})

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json()
    console.log('Received imageUrl:', imageUrl)

    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(imageResponse.data, 'binary')
    console.log('Downloaded image buffer:', buffer)

    const pngBuffer = await sharp(buffer).png().toBuffer()
    console.log('Converted image to PNG buffer')

    const formData = new FormData()
    formData.append('image_file', pngBuffer, { filename: 'image.png', contentType: 'image/png' })

    const removeBgResponse = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': removeBgApiKey,
      },
      responseType: 'arraybuffer',
    })

    const processedBuffer = Buffer.from(removeBgResponse.data, 'binary')
    console.log('Received processed image buffer:', processedBuffer)

    const trimmedBuffer = await sharp(processedBuffer).trim().toFormat('png').toBuffer()
    console.log('Trimmed processed image buffer')

    const uploadParams = {
      Bucket: s3UploadBucket,
      Key: `processed/${Date.now()}.png`,
      Body: trimmedBuffer,
      ContentType: 'image/png',
    }

    const command = new PutObjectCommand(uploadParams)
    await s3.send(command)

    const processedImageUrl = `https://${uploadParams.Bucket}.s3.${s3UploadRegion}.amazonaws.com/${uploadParams.Key}`
    console.log('Uploaded processed image to S3:', processedImageUrl)

    return NextResponse.json({ url: processedImageUrl })
  } catch (error) {
    // @ts-ignore
    console.error('Error removing background:', error.response?.data?.toString() || error.message)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
