import * as React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main className="flex min-w-full flex-col items-center py-4 px-4">{children}</main>
      <Footer />
    </>
  )
}
