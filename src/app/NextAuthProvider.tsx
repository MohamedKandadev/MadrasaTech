"use client"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { getSession } from "./api/auth/[...nextauth]/route"

const NextAuthProvider = async({ children }: { children: ReactNode }) => {
    const session = await getSession()
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}

export default NextAuthProvider