import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { PracticeLayout } from "ui"
import { useQuery } from "@tanstack/react-query"

function Page() {
  const query = useQuery(["count-even"], () => [2, 4, 6])
  const router = useRouter()

  console.log(query)

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("POST API")
    let data
    try {
      const response = await fetch("http://localhost:3000/api/practicePost", {
        method: "POST",
        body: JSON.stringify({ test: 1, yo: "yoYo" }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      data = (await response.json()) || "nothing received"
    } catch (e) {
      console.log(e)
    }

    console.log(data)
    router.push("/")
  }

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
      <div className="grid h-96 bg-blue-200 rounded-lg justify-center content-center mt-4">
        <form onSubmit={formHandler} className="space-y-4">
          <div className="">
            <label htmlFor="email" className="mr-2">
              Email
            </label>
            <input type="email" name="email" id="email" className="mr-2" />
          </div>
          <div>
            <label htmlFor="date" className="mr-2">
              Date
            </label>
            <input type="date" name="date" id="date" />
          </div>
          <div>
            <label htmlFor="topic" className="mr-2">
              Topic:
            </label>
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
            <label htmlFor="blog" className="bg-gray-600 rounded mb-2">
              Write blog here:
            </label>
            <textarea id="blog" name="blog" cols={20} rows={5} className="mt-2 w-full rounded-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-slate-700 rounded">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Page.PageLayout = PracticeLayout

export default Page
