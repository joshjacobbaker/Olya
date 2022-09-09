import Link from "next/link"
import { NextPage, GetStaticProps } from "next"
import reactFormData from "../../data/reactFormData.json"

interface IProps {
  data: { id: string | number; firstName: string; lastName: string; email: string; age: string; password: string; confirmPassword: string }[]
}

const UsersPage = ({ data }: IProps) => {
  return (
    <div className={`mt-4`}>
      <Link href="/">
        <a className={`px-4 py-2 bg-blue-400 rounded`}>Back to Home Page</a>
      </Link>
      <ul className={`mt-4`}>
        {data.map((d) => {
          return (
            <li id={d.id.toString()}>
              <Link href={`/users/${d.id.toString()}`}>
                <a className="bg-blue-900 py-4 px-8 flex justify-center items-center rounded-lg mb-4">{d.firstName}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersPage

// export const getStaticPaths = () => {}

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      data: reactFormData,
    },
  }
}
