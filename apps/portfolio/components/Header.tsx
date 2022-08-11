import React, { useState, useEffect } from "react"
import { Search, Menu, Logo } from "ui"
import { useTheme } from "next-themes"

type Props = {}

function Header({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  console.log(theme)

  const toggleThemeHandler = () => {
    if (currentTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
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
