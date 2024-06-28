import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/app/lib/mongodb'
import { compare } from 'bcryptjs'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

interface MyUser {
  id: string
  name: string
  email: string
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async credentials => {
        console.log('Authorize called with credentials:', credentials)
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing email or password')
          return null
        }

        try {
          const client = await clientPromise
          const db = client.db('studioDatabase')
          const user = await db.collection('users').findOne({ email: credentials.email })

          if (!user) {
            console.log('User not found')
            return null
          }

          console.log('User found:', user)

          const isValid = await compare(credentials.password, user.password)
          console.log('Password comparison result:', isValid)
          if (!isValid) {
            console.log('Invalid password')
            return null
          }

          console.log('User authenticated')
          return { id: user._id.toString(), name: user.name, email: user.email } as MyUser
        } catch (error) {
          console.error('Error in authorize function:', error)
          return null
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: undefined,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt callback:', { token, user, account, profile, isNewUser })
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      console.log('session callback:', { session, token, user })
      if (token.id) {
        session.user.id = token.id as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect callback:', { url, baseUrl })
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
})

export { handler as GET, handler as POST }
