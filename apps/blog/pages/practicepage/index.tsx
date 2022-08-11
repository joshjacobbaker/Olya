import { ReactElement, useState, useEffect } from "react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Link from "next/link"
import { PracticeLayout } from "ui"
import { useTheme } from "next-themes"

function Page() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  console.log(theme)

  return (
    <div>
      <Head>
        <title>practicepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>practicepage</p>
      <Link href="/">Click this and go back home</Link>
      <br />
      {currentTheme === "dark" ? <button onClick={() => setTheme("light")}>Light Theme? {theme}</button> : <button onClick={() => setTheme("dark")}>Dark Theme? {theme}</button>}
    </div>
  )
}

Page.PageLayout = PracticeLayout

export default Page
