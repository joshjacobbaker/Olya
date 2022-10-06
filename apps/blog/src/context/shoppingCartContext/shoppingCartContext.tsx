import { createContext, useContext, useReducer, useEffect, useCallback, useMemo, ReactNode } from "react"
import { mainReducer, MainReducerActions, ProductActions, ShoppingCartActions, Types, InitialStateType } from "./shoppingCartReducer"
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

// interface ShoppingCartType {
//   products: ProductType[]
//   quantity: number // products.reduce()
//   totalSalesAmount: number // products.reduce()
// }

// let shoppingCartInitialState: ShoppingCartType = { products: [], quantity: 0, totalSalesAmount: 0 }

// interface IShoppingCartReducerAction {
//   type: "TOTAL_SALES_AMOUNT" | "COUNT_QUANTITY" | "FILTER_PRODUCTS" | "SORT_PRODUCTS" | "ADD_PRODUCTS"
//   payload: { products?: ProductType[] }
// }

// interface IUiContext {
//   state: IShoppingCartReducerStateProps | object
//   dispatch: React.Dispatch<IShoppingCartReducerAction> | null
// }

const initialState = {
  products: [],
  shoppingCart: 0,
}

const ShoppingCartContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<ProductActions | ShoppingCartActions | MainReducerActions> }>({ state: initialState, dispatch: () => null })

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  let sharedState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    let localStorageState: InitialStateType = JSON.parse(localStorage.getItem("shoppingCartContext") || "") || initialState
    // alert(`localstorage ${JSON.stringify(localStorageState)}...{
    //   products: [{ id: 0, name: "martha", price: 4 }],
    //   shoppingCart: 10,
    // },`)
    dispatch({
      type: Types.LOCAL_STORAGE_STATE,
      payload: localStorageState,

      // payload: {
      //   products: [{ id: 0, name: "martha", price: 4 }],
      //   shoppingCart: 10,
      // },
    })
  }, [])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("shoppingCartContext", JSON.stringify(state))
    }
  }, [state])

  // console.log(sharedState)

  return <ShoppingCartContext.Provider value={sharedState}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
