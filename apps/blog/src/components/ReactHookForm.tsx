import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive("must be positive").required("age is required").typeError("Age field must be a number"),
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

interface IFormWithIdSchema {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
  password: string
  confirmPassword: string
}

// const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault()
//   console.log("POST API")
//   let data
//   let timeId = Date.now()
//   try {
//     const response = await fetch("http://localhost:3000/api/practicePost", {
//       method: "POST",
//       body: JSON.stringify({ id: timeId, test: 1, yo: "yoYo" }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     data = (await response.json()) || "nothing received"
//   } catch (e) {
//     console.log(e)
//   }

//   // console.log(data)
//   router.push(`/blog/${timeId}`)
// }

export default function ReactHookFormComponent() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormSchema>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "firstname",
      lastName: "lastname",
      email: "jd@gmail.test.com",
      age: 2,
      password: "asdfasdf",
      confirmPassword: "asdfasdf",
    },
  })

  const onSubmit: SubmitHandler<IFormSchema> = async (data: IFormSchema): Promise<IFormWithIdSchema | void> => {
    // console.log(`1. ${data}`)
    const dateId = new Date().getTime()
    console.log(dateId)
    let formData: IFormWithIdSchema = { ...data, id: dateId.toString() }
    try {
      const response = await fetch("http://localhost:3000/api/reacthookform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const responseData: string = (await response.json()) || "nothing received"
      console.log(responseData)
      router.push(`/users/${dateId}`)
    } catch (e) {
      console.log(e)
    }
    console.log(formData)
  }

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
