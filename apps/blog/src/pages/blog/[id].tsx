import Link from "next/link"
import { NextPage, GetStaticPaths, GetStaticProps, GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"
import data from "../../data/example.json"
interface IPageProps {
  id: string | number
}

const Page: NextPage<IPageProps> = ({ id }) => {
  return (
    <div>
      <p className="leading-3 text-zinc-500 font-extralight p-4 mb-4 border-2 border-blue-400 hover:font-bold hover:no-underline underline border-b-spacing-0 mt-4">Blog Id: {id}</p>
      <Link href="/blogs">
        <a className="py-2 px-4 bg-blue-200 rounded text-white">Go Back to list of blogs</a>
      </Link>
    </div>
  )
}

export default Page

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params
  // const result = data.filter((d) => d.id === id)
  return {
    props: {
      id,
    }, // will be passed to the page component as props
  }
}

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const paths = data.map((d) => {
//     return {
//       params: {
//         id: String(d.id),
//       },
//     }
//   })
//   // paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// interface IStaticProps {
//   id: string | number
// }

// export const getStaticProps: GetStaticProps<IStaticProps, Params> = async ({ params }) => {
//   const { id } = params as IStaticProps
//   return { props: { id } }
// }
