import React from "react"

export const PracticeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="text-blue-500">***A SHARED*** Practice Layout Wraps this Page</p>
      {children}
    </>
  )
}
