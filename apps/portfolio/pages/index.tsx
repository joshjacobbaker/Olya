import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Button } from "ui"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Olya`&apos;`s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Button />
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </main>
    </>
  )
}

export default Home
