import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body)
    const blog = req.body

    const newBlog = {
      id: Date.now(),
      blog,
    }
    fs.writeFileSync(path.join(__dirname, "./data/example.json"), "Hiiii")
    return res.status(200).json("received")
  } else {
    // Handle any other HTTP method
  }
}
