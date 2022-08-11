import * as React from "react"
import Header from "../Header"
type Props = {
  children?: JSX.Element
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header />
      <main className="flex min-w-full flex-col grow items-center">{children}</main>
    </div>
  )
}

export default MainLayout
