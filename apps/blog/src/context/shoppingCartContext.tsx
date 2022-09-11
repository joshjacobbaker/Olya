import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"
const ShoppingCartContext = createContext({})

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 }
    }
    case "DECREMENT": {
      return { count: state.count - 1 }
    }
    default:
      return state
  }
}

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  const memoizedProducts = useCallback(() => {
    return createProducts(20)
  }, [createProducts])
  let products = memoizedProducts()
  const [state, dispatch] = useReducer(shoppingCartReducer, { count: 0, products })
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
