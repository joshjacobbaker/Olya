import React from "react"

type Props = {}

export const Menu = (props: Props) => {
  return (
    <div className="group transition-all ease-in-out hover:delay-150 flex flex-col justify-around h-8 w-12 mr-2 mt-4 mb-4 cursor-pointer select-none">
      <div className="group-hover:w-6 group-active:w-full transition-all ease-in-out delay-75 duration-100 w-full border-t-8 rounded-lg"></div>
      <div className="group-hover:w-2 group-active:w-full transition-all ease-in-out delay-100 duration-200 w-full border-t-8 rounded"></div>
      <div className="group-hover:w-4 group-active:w-full transition-all ease-in-out delay-150 duration-300 w-full border-t-8 rounded"></div>
    </div>
  )
}
