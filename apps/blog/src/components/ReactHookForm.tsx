import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive("must be positive").required("age is required"),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
})

interface IFormSchema {
  firstName: string
  lastName: string
  email: string
  age: number
  password: string
  confirmPassword: string
}

const onSubmit: SubmitHandler<IFormSchema> = async (data) => console.log(data?.age)

export default function ReactHookFormComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormSchema>({
    resolver: yupResolver(schema),
  })

  // console.log(watch("example")) // watch input value by passing the name of it
  // console.log(watch("exampleRequired"))
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-700 p-4 rounded-lg flex flex-col items-center align-center">
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" placeholder="First Name" {...register("firstName")} />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" placeholder="Last Name" {...register("lastName")} />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Email" {...register("email")} />

        <label>Age</label>
        <input id="age" type="text" placeholder="age" {...register("age")} />

        <label htmlFor="password">Password:</label>
        <input id="password" type="text" placeholder="password" {...register("password")} />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="text" placeholder="Confirm Password" {...register("confirmPassword")} />

        <button type="submit" className="bg-blue-600 py-2 px-4 rounded-lg mt-2">
          Submit
        </button>
      </form>

      <div>
        <div>
          Errors:<span className="font-bold text-slate-800 text-lg">{errors && errors.age?.message}</span>
        </div>
        <div>
          First Name: <span className="font-bold text-slate-800 text-lg">{watch("firstName")}</span>
        </div>
      </div>
    </>
  )
}
