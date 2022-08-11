import React from "react"

type Props = {}

function Logo({}: Props) {
  return (
    <h1
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer focus:bottom-full transition ease-in-out 
hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0 dark:text-orange-400 text-blue-900">
      NavBar
    </h1>
  )
}

export { Logo }
