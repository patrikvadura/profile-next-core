import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const uniqueKey = req.nextUrl.searchParams.get('uniqueKey')
    if (!uniqueKey) {
      return NextResponse.json({ success: false, error: 'uniqueKey is required' })
    }

    const data = await collection.findOne({ uniqueKey })
    if (!data) {
      return NextResponse.json({ success: false, error: 'Data not found' })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
