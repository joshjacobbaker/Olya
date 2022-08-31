import Link from "next/link"
import ReactHookForm from "../../components/ReactHookForm"

const Page = () => {
  return (
    <div className="h-full w-full bg-zinc-600 flex flex-col items-center">
      <Link href="/">
        <a className="bg-blue-600 py-2 px-4 h-10 w-fit rounded-lg mt-4 mb-4">Home Page</a>
      </Link>
      <ReactHookForm />
    </div>
  )
}

export default Page
