import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
// import Link from "next/link"
import { Button } from "ui"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Button />
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    </div>
  )
}

export default Home
