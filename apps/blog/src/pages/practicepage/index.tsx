import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { PracticeLayout } from "ui"
// import PageLayout from "../../components/layouts/PageLayout"
// import { useTheme } from "next-themes"

function Page() {
  // const [mounted, setMounted] = useState(false)
  // const { systemTheme, theme, setTheme } = useTheme()

  // const currentTheme = theme === "system" ? systemTheme : theme

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  // console.log(theme)

  return (
    <div>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>practicepage</p>
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
