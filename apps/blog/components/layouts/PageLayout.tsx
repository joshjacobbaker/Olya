import React from "react"

type Props = {
  children?: JSX.Element
}

const PageLayout = ({ children }: Props) => {
  return <div>{children}</div>
}

export default PageLayout
