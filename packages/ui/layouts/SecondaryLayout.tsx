import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <>{children}</>
}
