import React from "react"

function Footer() {
  return (
    <footer className="flex w-full justify-between items-center h-20 font-bold text-blue-700 bg-blue-400">
      <h6
        className="text-3xl ml-32 text-4xl cursor-pointer focus:bottom-full transition ease-in-out 
        hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
        Footer
      </h6>

      <ul className="flex justify-between items-center w-1/4 m-4 mr-6">
        <li>
          <a
            className="inline-block cursor-pointer focus:bottom-full transition ease-in-out 
        hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
            1 Item
          </a>
        </li>
        <li>
          <p
            className="inline-block cursor-pointer focus:bottom-full transition ease-in-out 
            hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
            1 Item
          </p>
        </li>
        <li>
          <a
            className="inline-block cursor-pointer focus:bottom-full transition ease-in-out 
            hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
            1 Item
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
