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

    // Pokud hostname obsahuje více než dva segmenty, je to subdoména
    const hostSegments = hostname.split('.')
    if (hostSegments.length > 2) {
      const subdomain = hostSegments[0] // extrahování subdomény
      console.log('Subdomain:', subdomain)

      // Přepisování cesty na základě subdomény
      url.pathname = `/websites/${subdomain}${url.pathname}`
      console.log('Rewritten URL:', url.href)
      return NextResponse.rewrite(url)
    }

    // Pokud hostname neobsahuje subdoménu, pokračujte bez změny
    return NextResponse.next()
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
