import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
// import Link from "next/link"
import { Button } from "ui"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Olya`&apos;`s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-full flex grow flex-col justify-around items-center bg-zinc-100 ">
        <Button />
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    </>
  )
}

export default Home
