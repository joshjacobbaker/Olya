import * as React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

type Props = {
  children: JSX.Element
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <NavBar />
      <main className="flex min-w-full flex-col grow items-center">{children}</main>
      <Footer />
    </div>
  )
}
