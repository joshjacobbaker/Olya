import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { PracticeLayout } from "ui"
import { useQuery } from "@tanstack/react-query"

function Page() {
  const query = useQuery(["count-even"], () => [2, 4, 6])

  console.log(query)

  return (
    <div>
      <Head>
        <title>Write your blog here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Write your blog here</p>
      {query.data && query.data.map((d) => <p>{d}</p>)}
      <div className="grid grid-flow-col gap-4">
        <Link href="/" className="">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">Home Page?</a>
        </Link>
        <Link href="/masongrid" className="">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">checkout the Mason Grid?</a>
        </Link>
      </div>
      <div className="grid h-96 bg-yellow-200 justify-center content-center mt-4">
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div>
            <select name="topic" id="topic">
              <option value="shoes">shoes</option>
              <option value="jackets">jackets</option>
              <option value="shorts">shorts</option>
            </select>
          </div>
          <div>
            <label htmlFor="private">Private?</label>
            <input type="checkbox" name="private" id="private" />
          </div>
          <div>
            <label htmlFor="blog" className="bg-red-400">
              Write blog here:
            </label>
            <textarea id="blog" name="blog" cols="20" rows="5" className="w-full bg-green-200"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

Page.PageLayout = PracticeLayout

export default Page
