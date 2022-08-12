import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
// import Link from "next/link"
import { Button } from "ui"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Olya&apos;s Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-w-full flex grow flex-col justify-around items-center bg-zinc-100 ">
        <div className="flex flex-col w-1/2 justify-between">
          <Link href="/practicepage">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">Practice Page?</a>
          </Link>
          <Link href="/masongrid">
            <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">checkout the Mason Grid?</a>
          </Link>
        </div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />{" "}
      </div>
    </>
  )
}

export default Home
