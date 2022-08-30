import { ReactElement } from "react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

interface IPageProps {
  id: string | number
}

const Page: NextPage<IPageProps> = ({ id }) => {
  return <div>Blog Id: {id}</div>
}

export default Page

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  }
}

interface IStaticProps {
  id: string | number
}

export const getStaticProps: GetStaticProps<IStaticProps, Params> = async ({ params }) => {
  const { id } = params as IStaticProps
  return { props: { id } }
}
