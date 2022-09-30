import { getSession } from "next-auth/react"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
