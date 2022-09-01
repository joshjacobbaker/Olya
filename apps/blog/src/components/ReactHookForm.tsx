import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // console.log(watch("example")) // watch input value by passing the name of it
  // console.log(watch("exampleRequired"))
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-700 p-4 rounded-lg flex flex-col items-center align-center">
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="">example</label>
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="">example Required</label>
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <button className="bg-blue-600 py-2 px-4 rounded-lg mt-2">Submit</button>

      <div>
        <div>
          <span className="font-bold text-slate-600 text-lg">Example:</span> {watch("example")}
        </div>
        <div>
          <span className="font-bold text-slate-600 text-lg">Example Required:</span> {watch("exampleRequired")}
        </div>
      </div>
    </form>
  )
}
