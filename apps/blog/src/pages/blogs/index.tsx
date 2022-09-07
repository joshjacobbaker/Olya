import Link from "next/link"
import exampleData from "../../data/example.json"
import { NextPage, GetStaticProps } from "next"

interface IProps {
  data: { id: number; blog: { test: number; yo: string } }[]
}

const Page: NextPage<IProps> = ({ data }: IProps) => {
  return (
    <div>
      <Link href="/writingBlog">
        <a className="bg-blue-900 py-4 px-8 text-white flex justify-center items-center rounded-lg mt-4 mb-4">Wanna write a new blog?</a>
      </Link>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <Link href={`/blog/${d.id}`}>
              <a className="grid py-2 px-4 bg-blue-400 rounded-lg mt-2">Click to go to blog #: {d.id}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page

export const getStaticProps: GetStaticProps = () => {
  return { props: { data: exampleData } }
}
