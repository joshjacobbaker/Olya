import Link from "next/link"
import ReactHookForm from "../../components/ReactHookForm"
import { useReactHookFormData } from "../../context/reactHookFormProvider"

const Page = () => {
  const [state, dispatch] = useReactHookFormData()

  // console.log(state, dispatch)
  return (
    <div className="h-screen w-full bg-zinc-600 flex flex-col items-center">
      <Link href="/">
        <a className="bg-blue-600 py-2 px-4 h-10 w-fit rounded-lg mt-4 mb-4">Home Page</a>
      </Link>
      <ReactHookForm />

      <div className="text-white mt-4 rounded-lg grid justify-center h-1/4 w-1/4 bg-slate-900">
        <div className="bg-blue-400 m-2 rounded-lg grid items-center">
          <p className="bg-black text-center h-8">reducerContext: {state.count}</p>
        </div>
        <div className="flex items-center bg-black space-x-2">
          <button className="px-3 py-1 bg-blue-500 rounded-lg" onClick={() => dispatch({ type: "DECREMENT" })}>
            CLick me -1{" "}
          </button>
          <button className="px-3 py-1 bg-blue-500 rounded-lg" onClick={() => dispatch({ type: "INCREMENT" })}>
            CLick me +1
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
