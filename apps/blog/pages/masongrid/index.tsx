import Link from "next/link"
import React from "react"

type Props = {}

function MasonGrid({}: Props) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        <div className="video flex flex-grow bg-blue-300 h-36 sm:col-span-2 md:col-span-2 lg:col-span-1">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-red-200 h-36 w-60">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-green-400 h-36 w-60">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-yellow-400 h-36 sm:col-span-2">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-pink-400 h-36 sm:col-span-2">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-blue-400 h-36 w-60">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-green-400 h-36 w-60">Blog Thumbnail</div>
        <div className="video flex flex-grow bg-orange-400 h-36 sm:col-span-2">Blog Thumbnail</div>
      </div>
      <div>
        <Link href="/" className="">
          <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg">Go Back to Home Page?</a>
        </Link>
      </div>
    </>
  )
}

export default MasonGrid
