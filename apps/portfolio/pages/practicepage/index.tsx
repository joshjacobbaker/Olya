import type { ReactElement } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"

export default function Page() {
  return (
    <main>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        I wanna know more about your <span className="text-blue-800">blue balls</span>, my darling...
      </p>
      <Link href="/">Go Back to the home page</Link>
    </main>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <>{page}</>
    </>
  )
}
