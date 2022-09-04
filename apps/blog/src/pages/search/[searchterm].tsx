import React from "react"
import { useRouter } from "next/router"
import { InferGetServerSidePropsType, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import blogData from "../../data/example.json"

type Props = {
  matchedSearchResults: string[]
}

type PageParams = {
  searchterm: string
}

export default function SearchPage({ matchedSearchResults }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { searchterm } = router.query
  return (
    <div>
      <div>
        Your Search Term was: <span>{searchterm}</span>
      </div>
      <ul>
        <li>We found these results in descending order:</li>
        {matchedSearchResults[0] ? (
          matchedSearchResults.map((data) => {
            return <li id={data.id.toString()}>{data.id}</li>
          })
        ) : (
          <li>No Results -- try searching for a number like 1, 2, 3, etc.</li>
        )}
      </ul>
    </div>
  )
}

interface IServerProps {
  searchterm: string | number
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<PageParams>) => {
  const { searchterm } = params as PageParams
  const matchedSearchResults = blogData
    .filter((data) => {
      return new RegExp(searchterm, "ig").test(data.id.toString())
    })
    .sort((a, b) => b.id - a.id)
  return {
    props: {
      matchedSearchResults,
    },
  }
}
