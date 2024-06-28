'use client'

import { useState, useEffect } from 'react'
import { getCsrfToken, signIn } from 'next-auth/react'
import data from '@/app/lib/dataCustomizer.json'
import { Input } from '@/app/ui/Input'
import { Button } from '@/app/ui/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken()
      // @ts-ignore
      setCsrfToken(token)
      console.log('CSRF Token:', token)
    }
    fetchCsrfToken()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const credentials = {
      csrfToken: formData.get('csrfToken') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    console.log('Form data:', credentials)
    const res = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
      callbackUrl: '/studio',
    })

    console.log('Sign-in response:', res)

    if (res?.error) {
      setError('Nesprávné uživatelské jméno nebo heslo.')
    } else {
      router.push('/studio')
    }
  }

  const pageData = data.signIn

  return (
    <div className="container mt-auto mx-auto h-[85vh] flex flex-col space-y-8 overflow-hidden mb-0">
      <div className="mt-20 mx-auto w-[450px] bg-white px-8 py-12 rounded-3xl">
        <div className="flex flex-row justify-between items-center space-x-8">
          <h2 className="text-primary text-3xl font-bold">{pageData.title}</h2>
        </div>

        {error && <div className="text-red-500">{error}</div>}

        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="mt-4 w-full flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <input name="csrfToken" type="hidden" value={csrfToken || ''} />

          <Input label="Email" name="email" type="email" isRequired />

          <Input label="Heslo" name="password" type="password" isRequired />

          <div className="mt-4 text-center">
            <Button type="submit" className="bg-secondary text-primary rounded-full">
              Přihlásit se
            </Button>

            <p className="mt-4 text-primary">
              Nemáte ještě účet?{' '}
              <Link
                href="/auth/signup"
                className="underline font-semibold hover:text-secondary transition duration-300 ease-in-out"
              >
                Registrujte se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
