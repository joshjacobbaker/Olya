import React from "react"

function NavBar() {
  return (
    <nav className="flex top-0 h-20 w-full text-2xl text-slate-800 bg-blue-400 justify-between">
      <div className="flex flex-1 justify-between items-center ml-10 mr-10">
        <p className="hover:text-3xl transition-all ease-in-out duration-700 active:bg-slate-50 active:bg-slate-300 transition-colors select-none">NavBar</p>
        <label htmlFor="randomText">
          <input className="focus:outline-none focus:bg-gray-400" type="text" name="randomText" id="randomText" placeholder="Search" />
          <button type="submit" className="cursor-pointer">
            Submit
          </button>
        </label>
      </div>
      <div className="group transition-all ease-in-out delay-150 flex flex-col justify-around w-12 mr-4 mt-4 mb-4">
        <div className="group-hover:w-4 transition-all ease-in-out delay-75 duration-100 w-full border-t-8 rounded-lg"></div>
        <div className="group-hover:w-4 transition-all ease-in-out delay-100 duration-200 w-full border-t-8 rounded"></div>
        <div className="group-hover:w-4 transition-all ease-in-out delay-150 duration-300 w-full border-t-8 rounded"></div>
      </div>
    </nav>
  )
}

export default NavBar
