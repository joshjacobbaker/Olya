import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"

type Props = {}

export default function ThemeChanger({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  const updateTheme = () => {
    setTheme((p) => (p === "dark" ? "light" : "dark"))
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (currentTheme === "dark") {
    return (
      <button className="bg-black dark:text-white" onClick={updateTheme}>
        Light
      </button>
    )
  } else {
    return (
      <button className="bg-white dark:text-black" onClick={updateTheme}>
        Dark Mode
      </button>
    )
  }
}
