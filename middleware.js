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

    // Extract the full hostname (e.g., subdomain.domain.com)
    const fullDomain = hostname
    console.log('Full domain:', fullDomain)

    // Rewrite to the corresponding path based on the full domain
    url.pathname = `/websites/${fullDomain}${url.pathname}`
    console.log('Rewritten URL:', url.href)

    return NextResponse.rewrite(url)
  },
  {
    pages: {
      signIn: '/auth/signin',
    },
  },
)

export const config = {
  matcher: ['/:path*'],
}
