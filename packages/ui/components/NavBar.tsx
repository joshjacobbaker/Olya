import React from "react"

function NavBar() {
  return (
    <header>
      <nav className="flex top-0 h-20 w-full text-2xl text-slate-800 bg-blue-400 justify-between">
        <div className="flex flex-1 justify-between items-center ml-10 mr-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer focus:bottom-full transition ease-in-out 
        hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
            NavBar
          </h1>
          <label htmlFor="randomText">
            <input className="hidden sm:inline-block sm:w-48 md:w-60 lg:w-96 focus:outline-none focus:bg-gray-400 rounded mr-4" type="text" name="randomText" id="randomText" placeholder="Search" />
            <button
              type="submit"
              className="hidden sm:inline-block text-2xl cursor-pointer focus:bottom-full transition 
          ease-in-out hover:delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 active:duration-75 select-none active:translate-y-0">
              Submit
            </button>
          </label>
        </div>
        <div className="group transition-all ease-in-out hover:delay-150 flex flex-col justify-around w-12 mr-4 mt-4 mb-4 mr-6 cursor-pointer select-none">
          <div className="group-hover:w-6 group-active:w-full transition-all ease-in-out delay-75 duration-100 w-full border-t-8 rounded-lg"></div>
          <div className="group-hover:w-2 group-active:w-full transition-all ease-in-out delay-100 duration-200 w-full border-t-8 rounded"></div>
          <div className="group-hover:w-4 group-active:w-full transition-all ease-in-out delay-150 duration-300 w-full border-t-8 rounded"></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
