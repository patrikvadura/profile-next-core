import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
//@ts-ignore
import whois from 'whois'

export async function POST(request: NextRequest): Promise<void | NextResponse> {
  const { domain } = await request.json()

  if (!domain) {
    return NextResponse.json({ error: 'Doménové jméno je vyžadováno.' }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = client.db('studioDatabase')
    const collection = db.collection('websitesData')

    // Kontrola existence domény v databázi
    const existingDomain = await collection.findOne({ domain })
    if (existingDomain) {
      return NextResponse.json(
        {
          available: false,
          error: 'Navíc web s touhle doménou již na platformě VisioSnap existuje.',
        },
        { status: 200 },
      )
    }

    // Kontrola dostupnosti domény pomocí WHOIS
    return new Promise(resolve => {
      whois.lookup(domain, (err: any, data: string) => {
        if (err) {
          resolve(NextResponse.json({ error: 'Problém při kontrole domény.' }, { status: 500 }))
          return
        }

        // Enhanced logic to determine if the domain is registered or not
        const isRegistered = !/No match for|NOT FOUND|No entries found|is free/.test(data)
        resolve(NextResponse.json({ available: !isRegistered }, { status: 200 }))
      })
    }) as Promise<void | NextResponse>
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
