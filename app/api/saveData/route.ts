import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    const data = await req.json()

    const result = await collection.insertOne(data)
    return NextResponse.json({ success: true, data: result })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message })
  }
}
