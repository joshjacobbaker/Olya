import React from "react"
import { useRouter, Context } from "next/router"
import blogData from "../../data/example.json"

type Props = {
  matchedSearchResults: string[]
}

export default function SearchPage({ matchedSearchResults }: Props) {
  const router = useRouter()
  const { searchterm } = router.query
  return (
    <div>
      <div>
        Your Search Term was: <span>{searchterm}</span>
      </div>
      <ul>
        <li>We found these results:</li>
        {matchedSearchResults[0] ? (
          matchedSearchResults.map((data) => {
            return <li id={data.id}>{data.id}</li>
          })
        ) : (
          <li>No Results -- try searching for a number like 1, 2, 3, etc.</li>
        )}
      </ul>
    </div>
  )
}

export const getServerSideProps = async ({ params }: Context) => {
  const { searchterm } = params
  const matchedSearchResults = blogData.filter((data) => {
    return new RegExp(searchterm, "ig").test(data.id.toString())
  })
  return {
    props: {
      matchedSearchResults,
    },
  }
}
