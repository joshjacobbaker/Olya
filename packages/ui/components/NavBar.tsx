import React from "react"

function NavBar() {
  return (
    <nav className="flex top-0 h-20 w-full text-2xl text-slate-800 bg-blue-400 justify-between">
      <div>NavBar</div>
      <div className="group transition-all ease-in-out delay-150 flex flex-col justify-around w-12 mr-4 mt-4 mb-4">
        <div className="group-hover:w-4 transition-all ease-in-out delay-75 duration-100 w-full border-t-8 rounded-lg"></div>
        <div className="group-hover:w-4 transition-all ease-in-out delay-100 duration-200 w-full border-t-8 rounded"></div>
        <div className="group-hover:w-4 transition-all ease-in-out delay-150 duration-300 w-full border-t-8 rounded"></div>
      </div>
    </nav>
  )
}

export default NavBar
