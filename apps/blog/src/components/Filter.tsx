import { useCallback } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useShoppingCartContext } from "../context/shoppingCartContext/shoppingCartContext"

const schema = yup.object().shape({
  id: yup.string(),
  productName: yup.string(),
  price: yup.number(),
  // image: faker.image.fashion(),
  inStock: yup.number().min(0).max(15),
  fastDelivery: yup.boolean(),
  ratings: yup.number(),
})

interface IFormSchema {
  id: string
  productName: string
  price: number
  // image: faker.image.fashion(),
  inStock: number
  fastDelivery: boolean
  ratings: number
}

const Filter = () => {
  let { dispatch } = useShoppingCartContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormSchema>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: "",
      productName: "",
      price: 0,
      // image: faker.image.fashion(),
      inStock: 0,
      fastDelivery: false,
      ratings: 0,
    },
  })

  const onSubmit: SubmitHandler<IFormSchema> = async (data: IFormSchema): Promise<IFormSchema | void> => {
    dispatch({ type: "FILTER", payload: data })
    console.log(data)
  }

  return (
    <>
      <button onClick={() => dispatch({ type: "UNFILTER" })} type="submit" className="px-4 py-2 bg-blue-400">
        Unfilter
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={`bg-slate-700 grid h-40`}>
        <span>Filter products</span>
        <span>
          <label htmlFor="price">Price above $50.00</label>
          <input className={`ml-3`} type="number" {...register("price")} />
        </span>
        <span>
          <label htmlFor="inStock">InStock?</label>
          <input className={`ml-3`} type="number" {...register("inStock")} />
        </span>
        <span>
          <label htmlFor="ratings">Ratings</label>
          <input className={`ml-3`} type="number" {...register("ratings")} />
        </span>
        <span>
          <label htmlFor="ratings">Fast Delivery</label>
          <input className={`ml-3`} type="checkbox" {...register("fastDelivery")} />
        </span>
        <button type="submit" className="px-4 py-2 bg-blue-400">
          Filter
        </button>
      </form>
    </>
  )
}

export default Filter
