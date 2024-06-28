import { GetSessionParams, getSession } from 'next-auth/react'

export async function getServerSession(context: GetSessionParams | undefined) {
  return await getSession(context)
}
