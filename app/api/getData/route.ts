import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET(req: NextRequest) {
  try {
    console.log('Connecting to MongoDB...')
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const domain = req.nextUrl.searchParams.get('domain')
    if (!domain) {
      console.log('Domain is missing')
      return NextResponse.json({ success: false, error: 'Domain is required' })
    }

    console.log(`Fetching data for domain: ${domain}`)
    const data = await collection.findOne({ domain: domain })
    if (!data) {
      console.log('No data found for domain:', domain)
      return NextResponse.json({ success: false, error: 'Data not found' })
    }

    console.log('Data found:', data)
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ success: false, error: error.message })
  }
}
