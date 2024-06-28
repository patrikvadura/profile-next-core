'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/app/ui/Input'
import { Button } from '@/app/ui/Button'
import data from '@/app/lib/dataCustomizer.json'
import Link from 'next/link'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const pageData = data.signUp

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError(null) // Reset error state

    if (!email || !password || !name) {
      setError('Všechny pole jsou povinné.')
      return
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })

    if (res.ok) {
      router.push('/auth/signin')
    } else {
      const errorMsg = await res.text()
      if (errorMsg.includes('User already exists')) {
        setError('Uživatel s tímto emailem již existuje.')
      } else {
        setError('Registrace se nezdařila, zkuste to prosím znovu.')
      }
      console.error('Failed to sign up:', errorMsg)
    }
  }

  return (
    <div className="container mt-auto mx-auto h-[85vh] flex flex-col space-y-8 overflow-hidden mb-0">
      <div className="mt-20 mx-auto w-[450px] bg-white px-8 py-12 rounded-3xl">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 w-full flex flex-col gap-6">
          {error && <p className="text-sm font-semibold text-red-500">{error}</p>}

          <Input
            label="Jméno"
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            isRequired
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            isRequired
          />

          <Input
            label="Heslo"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            isRequired
          />

          <div className="mt-4 text-center">
            <Button type="submit" className="bg-secondary text-primary rounded-full">
              Registrovat se
            </Button>

            <p className="mt-4 text-primary">
              Již máte účet?{' '}
              <Link
                href="/auth/signin"
                className="underline font-semibold hover:text-secondary transition duration-300 ease-in-out"
              >
                Přihlaste se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
