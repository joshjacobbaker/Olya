import React from "react"

function NavBar() {
  return (
    <nav className="flex top-0 h-20 w-full text-2xl text-slate-800 bg-blue-400 justify-between">
      <div>NavBar</div>
      <div className="flex flex-col justify-around w-24 mr-4 mt-4">
        <div className="w-full border-t-8"></div>
        <div className="w-full border-t-8"></div>
        <div className="h-1/3 w-full border-t-8"></div>
      </div>
    </nav>
  )
}

export default NavBar
