import React, { useContext } from "react"
import { Search, Menu, Logo } from "ui"
import MyThemeContext from "../store/myThemeContext"

type Props = {}

function Header({}: Props) {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }

  return (
    <header>
      <nav className="flex top-0 h-20 w-full text-2xl text-slate-800 bg-blue-400 justify-between">
        <div className="flex flex-1 justify-between items-center ml-10 mr-10">
          <Logo />
          <Search />
          <button type="button" className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded" onClick={toggleThemeHandler}>
            Toggle Theme
          </button>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
