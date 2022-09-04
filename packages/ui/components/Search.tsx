import React, { useCallback, useState } from "react"
import { useRouter } from "next/router"

type Props = {}

function Search({}: Props) {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault()
      console.log(e.target)
      router.push(`/search/${search}`)
    },
    [router, search]
  )

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="randomText">
        <input onChange={(e) => setSearch(e.target.value)} onSubmit={onSubmitHandler} className="hidden sm:inline-block sm:w-48 md:w-60 lg:w-96 focus:outline-none focus:bg-gray-400 rounded mr-4" type="text" name="randomText" id="randomText" placeholder="Search" />
        {/* <span>{search}</span> */}
        <button
          type="submit"
          className="hidden sm:inline-block text-2xl cursor-pointer focus:bottom-full transition 
  ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
          Submit
        </button>
      </label>
    </form>
  )
}

export { Search }
