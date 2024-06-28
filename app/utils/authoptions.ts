import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/app/lib/mongodb'
import { compare } from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials) {
        const client = await clientPromise
        const db = client.db('studioDatabase')
        const user = await db.collection('users').findOne({ email: credentials?.email })

        console.log('Authorize function triggered')
        console.log('Credentials:', credentials)
        console.log('User found:', user)

        if (user && credentials?.password) {
          const isValid = await compare(credentials.password, user.password)
          console.log('Password valid:', isValid)
          if (isValid) {
            console.log('Returning user:', { id: user._id, email: user.email })
            return { id: user._id, email: user.email }
          } else {
            console.log('Invalid password')
          }
        } else {
          console.log('User not found or no password provided')
        }

        return null
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // @ts-ignore
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user.id = token.id
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: undefined,
  },
}
