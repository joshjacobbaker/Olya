import * as React from "react"
import Link from "next/link"
export const Button = () => {
  return (
    <Link href="/practicepage" className="">
      <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">Home </a>
    </Link>
  )
}
