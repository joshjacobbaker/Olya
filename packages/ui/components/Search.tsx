import React, { useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

type Props = {}

function Search({}: Props) {
  const router = useRouter()
  const { register, handleSubmit, watch } = useForm()
  const searchTerm: string = watch("randomText")
  const onSubmitHandler = () => {
    router.push(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label htmlFor="randomText">
        <input className="hidden sm:inline-block sm:w-48 md:w-60 lg:w-96 focus:outline-none focus:bg-gray-400 rounded mr-4" type="text" {...register("randomText")} id="randomText" placeholder="Search" />
        {/* <span>{searchTerm}</span> */}
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
