import * as React from "react"
import Header from "../Header"
import { Footer } from "ui"
import { useState } from "react"
type Props = {
  children?: JSX.Element
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header />
      <main className="flex min-w-full flex-col grow items-center">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
