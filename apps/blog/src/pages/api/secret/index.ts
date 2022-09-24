import { getSession } from "next-auth/react"
import { NextRequest, NextResponse } from "next/server"

export default async function handler(req: NextRequest, res: NextResponse) {
  const session = await getSession({ req })

  if (session) {
    res.send({
      content: "Welcome to the secret page",
    })
  } else {
    res.send({
      error: "This page is protected--you'll need to login.",
    })
  }
}
