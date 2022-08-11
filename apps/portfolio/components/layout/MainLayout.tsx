import * as React from "react"
import { NavBar, Footer } from "ui"

type Props = {
  children: JSX.Element
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <NavBar />
      <main className="flex min-w-full flex-col grow items-center">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
