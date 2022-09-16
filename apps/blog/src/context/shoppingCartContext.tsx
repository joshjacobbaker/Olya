import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"

// id: faker.datatype.uuid(),
// productName: faker.commerce.productName(),
// price: faker.commerce.price(),
// image: faker.image.fashion(),
// inStock: faker.random.numeric(),
// fastDelivery: faker.datatype.boolean(),
// ratings: faker.random.numeric(),

interface IShoppingCartContext {
  state: any
  dispatch: any
}

type product = { id: number; productName: string; price: number; image: string; inStock: number | string; fastDelivery: boolean; ratings: number }
interface UiReducerStateProps {
  products: product[]
}

// const initialState: UiReducerStateProps = {
// }

interface IShoppingCartReducerAction {
  type: "FILTER" | "UNFILTER" | "DECREMENT"
  payload: product
}

const ShoppingCartContext = createContext<IShoppingCartContext>({ state: null, dispatch: null })

const shoppingCartReducer = (state: UiReducerStateProps, action: IShoppingCartReducerAction) => {
  switch (action.type) {
    case "FILTER": {
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
      console.log(typeof action.payload.fastDelivery)
      // console.log(`${action.payload.fastDelivery} payload`)
      console.log(filteredProducts)
      // const {productName, inventoryCount} = action.payload
      // const filterForProduct = state.filter(()=>{})
      // const updateFilteredProduct = {...filterForProduct, filterForProduct.inventoryCount + inventoryCount }
      // return { ...state, updateFilteredProduct }
      console.log(action.payload)
      return { products: filteredProducts }
    }
    case "UNFILTER": {
      // const {productName, inventoryCount} = action.payload
      // const filterForProduct = state.filter(()=>{})
      // const updateFilteredProduct = {...filterForProduct, filterForProduct.inventoryCount + inventoryCount }
      // return { ...state, updateFilteredProduct }
      console.log(action.payload)
      return { products: createProducts(20) }
    }
    case "DECREMENT": {
      return { ...state }
    }
    default:
      return state
  }
}

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }): void => {
  const memoizedProducts = useCallback(() => {
    return createProducts(20)
  }, [])
  let products = memoizedProducts()
  const [state, dispatch] = useReducer(shoppingCartReducer, { products })
  const sharedState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  console.log(memoizedProducts)
  return <ShoppingCartContext.Provider value={sharedState}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
