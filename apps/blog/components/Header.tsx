import React, { useContext } from "react"
import { Search, Menu, Logo } from "ui"
import MyThemeContext from "../store/myThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

type Props = {}

function Header({}: Props) {
  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }

  return (
    <header>
      <nav
        className="flex top-0 h-20 w-full text-2xl 
      text-slate-800 bg-blue-400 dark:bg-blue-800 justify-between">
        <div
          className="flex flex-1 justify-between 
        items-center ml-10 mr-10">
          <Logo />
          <Search />
          <button
            type="button"
            className="bg-zinc-800 text-white dark:bg-zinc-200 
          dark:text-black rounded py-4 px-8"
            onClick={toggleThemeHandler}>
            {themeCtx.isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>

          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
