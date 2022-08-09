import React from "react"

type Props = {}

function MasonGrid({}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="video h-36 w-60">Blog Thumbnail</div>
      <div className="video h-36 w-60">Blog Thumbnail</div>
      <div className="video h-36 w-60">Blog Thumbnail</div>
      <div className="video h-36 w-60">Blog Thumbnail</div>
      <div className="video h-36 w-60">Blog Thumbnail</div>
      <div className="video h-36 w-60">Blog Thumbnail</div>
    </div>
  )
}

export default MasonGrid
