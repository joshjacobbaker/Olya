import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs/promises"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body)
    const blog = req.body

    const dataReadResponse = await fs.readFile(path.join(process.cwd(), "./src/data/example.json"), { encoding: "utf8" })
    console.log(dataReadResponse)
    let dataReadResponseParsed = JSON.parse(dataReadResponse)

    if (!Array.isArray(dataReadResponseParsed)) {
      dataReadResponseParsed = [...dataReadResponseParsed]
    }

    dataReadResponseParsed.push(blog)
    const dataWriteResponse = await fs.writeFile(path.join(process.cwd(), "./src/data/example.json"), JSON.stringify(dataReadResponseParsed))
    return res.status(200).json("received")
  } else {
    // Handle any other HTTP method
  }
}
