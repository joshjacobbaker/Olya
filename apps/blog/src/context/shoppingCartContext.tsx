import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"

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

type Iproduct = { id: string; productName: string; price: string; image: string; quantity: string; fastDelivery: string; rating: string }

interface IShoppingCartReducerStateProps {
  products: Iproduct[]
  quantity: number // products.reduce()
  totalSalesAmount: number // products.reduce()
}

let shoppingCartInitialState = { products: [], quantity: 0, totalSalesAmount: 0 }

interface IShoppingCartReducerAction {
  type: "TOTAL_SALES_AMOUNT" | "COUNT_QUANTITY" | "FILTER_PRODUCTS" | "SORT_PRODUCTS" | "ADD_PRODUCTS"
  payload: { products?: Iproduct[] }
}

interface IUiContext {
  state: IShoppingCartReducerStateProps | object
  dispatch: () => void
}

const ShoppingCartContext = createContext<IUiContext>({ state: null, dispatch: null })

const shoppingCartReducer = (state: IShoppingCartReducerStateProps, action: IShoppingCartReducerAction): IShoppingCartReducerStateProps => {
  switch (action.type) {
    case "TOTAL_SALES_AMOUNT":
      return {
        ...state,
        totalSalesAmount: action.payload.products.reduce((acc, item) => {
          return acc + parseFloat(item.price) * parseFloat(item.quantity)
        }, 0),
      }
    case "ADD_PRODUCTS":
      return { ...state, products: [...state?.products, ...action?.payload?.products] }
    // case: "TOTAL_SALES_AMOUNT":
    //     return [].reduce()
    // case: "COUNT_QUANTITY":
    //     return [].reduce()
    default:
      return state
  }
}

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
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
