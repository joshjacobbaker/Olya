import React from "react"
import { useTheme } from "next-themes"

type Props = {}

function DarkThemeToggle({}: Props) {
  const { theme, setTheme } = useTheme()
  console.log(theme)

  if (theme === "dark") {
    return (
      <button className="bg-white text-black" onClick={() => setTheme("light")}>
        Light
      </button>
    )
  } else {
    return (
      <button className="bg-black text-white" onClick={() => setTheme("dark")}>
        Dark
      </button>
    )
  }
}

export default DarkThemeToggle
