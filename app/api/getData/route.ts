import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const domain = req.nextUrl.searchParams.get('domain')
    if (!domain) {
      return NextResponse.json({ success: false, error: 'Domain is required' })
    }

    const data = await collection.findOne({ domain: domain })
    if (!data) {
      return NextResponse.json({ success: false, error: 'Data not found' })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
