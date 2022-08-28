import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { PracticeLayout } from "ui"
import { useQuery } from "@tanstack/react-query"

function Page({ data }) {
  const query = useQuery(["count"], () => [1, 2, 3])

  console.log(`props: ${JSON.stringify(data.name)}`)

  return (
    <div>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Practice Page</h1>

      <p className="border-b bg-green-200 rounded px-4 py-2 my-2">Server Side Request is returning the name of: {data.name && <span className="text-lg font-bold text-red-500">{data.name}</span>}</p>

      <p>React Query:</p>

      <ul>{query.data && query.data.map((d, i) => <li className={`ml-2 ${i % 2 === 0 ? "ml-8" : ""}`}>{d}</li>)}</ul>
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

Page.PageLayout = PracticeLayout

export default Page
