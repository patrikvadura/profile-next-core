import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

export async function GET(request: NextRequest) {
  const domain = request.nextUrl.searchParams.get('domain')
  if (!domain) {
    return NextResponse.json({ success: false, error: 'Domain is required' })
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!)
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const data = await collection.findOne({ domain: domain })
    client.close()

    if (!data) {
      return NextResponse.json({ success: false, error: 'Data not found' })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ success: false, error: error.message })
  }
}
