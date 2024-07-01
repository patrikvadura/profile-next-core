import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// Middleware bez autorizace
async function middlewareWithoutAuth(request) {
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

  // Get default domain from environment variables
  const defaultDomain = process.env.NEXT_PUBLIC_DEFAULT_DOMAIN

  // If not localhost and not the default domain, rewrite the URL to point to the corresponding directory
  if (!isLocalhost && hostnameWithoutPort !== defaultDomain) {
    url.pathname = `/websites/${hostnameWithoutPort}${url.pathname}`
    console.log('Rewritten URL:', url.href)
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

// Middleware s autorizací pouze pro /studio
const authMiddleware = withAuth(
  async function middleware(request) {
    return middlewareWithoutAuth(request)
  },
  {
    pages: {
      signIn: '/auth/signin',
    },
  },
)

// Export middleware
export default function middleware(request) {
  // Pokud URL obsahuje "/studio", použijte authMiddleware, jinak middlewareWithoutAuth
  if (request.nextUrl.pathname.startsWith('/studio')) {
    return authMiddleware(request)
  }
  return middlewareWithoutAuth(request)
}

export const config = {
  matcher: ['/studio/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
