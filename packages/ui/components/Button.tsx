import * as React from "react"
import Link from "next/link"
export const Button = () => {
  return (
    <Link href="/practicepage" className="bg-black h-8 w-16">
      <a className="bg-blue-900 h-10 w-20 flex justify-center items-center rounded-lg">Home </a>
    </Link>
  )
}
