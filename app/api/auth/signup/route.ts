import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'
import { hash } from 'bcryptjs'

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json()

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const client = await clientPromise
  const db = client.db('studioDatabase')

  const existingUser = await db.collection('users').findOne({ email })

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const hashedPassword = await hash(password, 10)

  const newUser = {
    email,
    password: hashedPassword,
    name,
  }

  await db.collection('users').insertOne(newUser)

  return NextResponse.json({ message: 'User created' }, { status: 201 })
}
