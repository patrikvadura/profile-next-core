import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('contactEmail')

  if (!email) {
    return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const documents = await collection.find({ contactEmail: email }).toArray()

    if (documents.length === 0) {
      return NextResponse.json({ success: false, message: 'No documents found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: documents })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
