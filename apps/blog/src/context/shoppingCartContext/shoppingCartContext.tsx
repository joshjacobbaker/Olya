import { createContext, useContext, useReducer, useEffect, useCallback, useMemo, ReactNode } from "react"
import { productReducer, shoppingCartReducer, ProductActions, ShoppingCartActions } from "./shoppingCartReducer"
// id: faker.datatype.uuid(),
// productName: faker.commerce.productName(),
// price: faker.commerce.price(),
// image: faker.image.fashion(),
// inStock: faker.random.numeric(),
// fastDelivery: faker.datatype.boolean(),
// ratings: faker.random.numeric(),

// interface IShoppingCartContext {
//   state: any
//   dispatch: any
// }

// type ProductType = { id: string; productName: string; price: string; image: string; quantity: string; fastDelivery: string; rating: string }

type ProductType = { id: number; name: string; price: number }

type InitialStateType = {
  products: ProductType[]
  shoppingCart: number
}

// interface ShoppingCartType {
//   products: ProductType[]
//   quantity: number // products.reduce()
//   totalSalesAmount: number // products.reduce()
// }

// let shoppingCartInitialState: ShoppingCartType = { products: [], quantity: 0, totalSalesAmount: 0 }
const initialState = {
  products: [],
  shoppingCart: 0,
}

// interface IShoppingCartReducerAction {
//   type: "TOTAL_SALES_AMOUNT" | "COUNT_QUANTITY" | "FILTER_PRODUCTS" | "SORT_PRODUCTS" | "ADD_PRODUCTS"
//   payload: { products?: ProductType[] }
// }

// interface IUiContext {
//   state: IShoppingCartReducerStateProps | object
//   dispatch: React.Dispatch<IShoppingCartReducerAction> | null
// }

const ShoppingCartContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<ProductActions | ShoppingCartActions> }>({ state: initialState, dispatch: () => null })

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
})

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  let sharedState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  // useEffect(() => {
  //   let state = JSON.parse(localStorage.getItem("shoppingCartContext"))
  // }, [])

  // useEffect(() => {
  //   if (sharedState.state !== initialState) {
  //     localStorage.setItem("shoppingCartContext", JSON.stringify(sharedState))
  //   }
  // }, [sharedState])

  return <ShoppingCartContext.Provider value={sharedState}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
