import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(request) {
    const url = request.nextUrl.clone()
    const hostname = request.headers.get('host')

    console.log('Request URL:', url.href)
    console.log('Hostname:', hostname)

    if (!hostname) {
      console.log('Hostname not found')
      return NextResponse.next()
    }

    return NextResponse.next()
  },
  {
    pages: {
      signIn: '/auth/signin',
    },
  },
)

export const config = {
  matcher: ['/studio/:path*'],
}
