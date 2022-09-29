import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"

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

type Iproduct = { id: number; productName: string; price: number; image: string; quantity: number; fastDelivery: boolean; rating: number }

interface IShoppingCartReducerStateProps {
  products: Iproduct[] | null
  quantity: number // products.reduce()
  totalSalesAmount: number // products.reduce()
}

let shoppingCartInitialState = { products: null, quantity: 0, totalSalesAmount: 0 }

interface IShoppingCartReducerAction {
  type: "TOTAL_SALES_AMOUNT" | "COUNT_QUANTITY"
  payload: Iproduct[]
}

interface IUiContext {
  state: any
  dispatch: any
}

const ShoppingCartContext = createContext<IUiContext>({ state: null, dispatch: () => null })

const shoppingCartReducer = (state: IShoppingCartReducerStateProps, action: IShoppingCartReducerAction): IShoppingCartReducerStateProps => {
  switch (action.type) {
    case "TOTAL_SALES_AMOUNT":
      return {
        ...state,
        totalSalesAmount: action.payload.reduce((acc, item) => {
          return acc + item.price * item.quantity
        }, 0),
      }
    // case: "TOTAL_SALES_AMOUNT":
    //     return [].reduce()
    // case: "COUNT_QUANTITY":
    //     return [].reduce()
    default:
      return state
  }
}

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  const memoizedProducts = useCallback(() => {
    return createProducts(20)
  }, [])

  let products = memoizedProducts()
  const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState)
  const sharedState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  // useEffect(() => {
  //   const shoppingCartContextState = JSON.stringify(localStorage.getItem("shoppingCartContext"))
  //   if (shoppingCartContextState) {
  //     dispatch({ type: "LOCAL_STATE", payload: shoppingCartContextState })
  //   }
  // }, [])

  // useEffect(() => {
  //   if (state !== initialState) {
  //     localStorage.setItem("shoppingCartContext", JSON.stringify(state))
  //   }
  // }, [state])

  return <ShoppingCartContext.Provider value={sharedState}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
