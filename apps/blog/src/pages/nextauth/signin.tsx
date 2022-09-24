import React, { useState } from "react"
import { useRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/react"
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs"

const providers = [
  {
    name: "github",
    Icon: BsGithub,
  },
  {
    name: "twitter",
    Icon: BsTwitter,
  },
  {
    name: "google",
    Icon: BsGoogle,
  },
]

type Props = {}

function Signin({}: Props) {
  const { data: session, status } = useSession()
  const { push } = useRouter()

  if (status === "loading") {
    return <div>Checking Authentication</div>
  }

  if (session) {
    setTimeout(() => {
      push("/")
    }, 5000)

    return <div>You are signed in!</div>
  }

  const handleOAuthSignIn = (provider) => signIn(provider)
  return (
    <div>
      <ul>
        {providers.map(({ name, Icon }) => {
          return (
            <li key={name} onClick={() => handleOAuthSignIn(name)} className={`grid min-w-fit grid-cols-2 p-4 m-4 bg-slate-300`}>
              <div>
                <Icon />
              </div>
              <p>{name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Signin
