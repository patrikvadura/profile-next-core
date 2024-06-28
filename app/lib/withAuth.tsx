'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const withAuth = (WrappedComponent: React.FC) => {
  const AuthComponent = (props: any) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      if (status === 'loading') return // Do nothing while loading
      if (!session) {
        router.push('/auth/signin?callbackUrl=%2Fstudio') // Redirect if not authenticated
      }
    }, [session, status, router])

    if (status === 'loading') {
      return <div>Loading...</div>
    }

    return <WrappedComponent {...props} />
  }

  return AuthComponent
}

export default withAuth
