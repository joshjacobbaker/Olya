import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { PracticeLayout } from "ui"
import { useQuery } from "@tanstack/react-query"

function Page() {
  const query = useQuery(["count"], () => [1, 2, 3])

  console.log(query)

  return (
    <div>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>practicepage</p>
      {query.data && query.data.map((d) => <p>{d}</p>)}
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="bg-red-200 py-4 px-8">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">Home Page?</a>
        </Link>
        <Link href="/masongrid" className="bg-red-200 py-4 px-8">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">checkout the Mason Grid?</a>
        </Link>
      </div>
    </div>
  )
}

Page.PageLayout = PracticeLayout

export default Page
