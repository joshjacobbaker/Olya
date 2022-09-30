import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function NextAuth() {
  const { data: session } = useSession()
  const { push, asPath } = useRouter()
  const handleSignIn = () => {
    push(`/nextauth/signin?callbackUrl=/`)
  }
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Link href="/nextauth/secret">Go To Secret</Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
      <Link href="/nextauth/secret">Go To Secret</Link>
    </>
  )
}
