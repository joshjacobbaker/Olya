import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import data from "../../data/reactFormData.json"

interface IProps {
  id: string
}

const UsersIdPage: NextPage<IProps> = ({ id }) => {
  const router = useRouter()
  return (
    <div>
      <div>router: {router.query.id}</div>
      <div>prop: {id}</div>
    </div>
  )
}

export default UsersIdPage

interface Params extends ParsedUrlQuery {
  id: string
}

interface IFormWithIdSchema {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  password: string
  confirmPassword: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = data.map((d) => {
    return {
      params: {
        id: String(d.id),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

// interface IStaticProps {
//   id: string | number
// }

export const getStaticProps: GetStaticProps<Params> = async ({ params }) => {
  const { id } = params as Params
  return { props: { id } }
}
