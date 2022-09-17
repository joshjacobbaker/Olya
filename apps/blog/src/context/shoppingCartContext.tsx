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

type product = { id: number; productName: string; price: number; image: string; inStock: number | string; fastDelivery: boolean; ratings: number }

interface UiReducerStateProps {
  products: product[]
  quantity: number // products.reduce()
  TotalSalesAmount: number // products.reduce()
}

let shoppingCartInitialState = { products: [], quantity: 0, totalSalesAmount: 0 }

interface IShoppingCartReducerAction {
  type: "FILTER" | "UNFILTER" | "DECREMENT"
  payload: product | product[]
}

const ShoppingCartContext = createContext({ state: null, dispatch: null })

const shoppingCartReducer = (state: UiReducerStateProps, action: IShoppingCartReducerAction): UiReducerStateProps => {
  switch (action.type) {
    case "FILTER":
      let { products } = state
      let filteredProducts = products
        .filter((obj) => {
          return obj.inStock > action.payload.inStock
        })
        .filter((obj) => {
          return obj.ratings > action.payload.ratings
        })
        .filter((obj) => {
          if (action.payload.fastDelivery) {
            return obj.fastDelivery === true
          } else {
            return obj
          }
        })
        .filter((obj) => {
          return obj.price > action.payload.price
        })
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
  const [state, dispatch] = useReducer(shoppingCartReducer, { products })
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
