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

    // Remove the port number from the hostname if it exists
    const hostnameWithoutPort = hostname.split(':')[0]

    // Check if the request is from localhost or not
    const isLocalhost = hostnameWithoutPort === 'localhost' || hostnameWithoutPort === '127.0.0.1'

    // If not localhost, rewrite the URL to point to the corresponding directory
    if (!isLocalhost) {
      url.pathname = `/websites/${hostnameWithoutPort}${url.pathname}`
      console.log('Rewritten URL:', url.href)
      return NextResponse.rewrite(url)
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
  matcher: [
    // Add paths that need authentication and subdomain routing
    '/studio/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
