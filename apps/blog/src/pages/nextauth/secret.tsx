import React, { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

type Props = {}

function Secret({}: Props) {
  const { data: session } = useSession()
  const [content, setContent] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/secret")
      const json = await res.json()

      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  if (typeof window !== "undefined") return

  if (!session) {
    return (
      <div>
        <h1>You arent signed in please sign in first</h1>
      </div>
    )
  }
  return <div>The secret word is platapussy</div>
}

export default Secret
