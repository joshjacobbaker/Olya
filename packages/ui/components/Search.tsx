import React from "react"

type Props = {}

function Search({}: Props) {
  return (
    <label htmlFor="randomText">
      <input className="hidden sm:inline-block sm:w-48 md:w-60 lg:w-96 focus:outline-none focus:bg-gray-400 rounded mr-4" type="text" name="randomText" id="randomText" placeholder="Search" />
      <button
        type="submit"
        className="hidden sm:inline-block text-2xl cursor-pointer focus:bottom-full transition 
  ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
        Submit
      </button>
    </label>
  )
}

export { Search }
