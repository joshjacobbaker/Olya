import React from "react"

export const PracticeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="text-blue-500">Practice Layout Wraps this Page</p>
      {children}
    </>
  )
}
