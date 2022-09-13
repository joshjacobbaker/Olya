import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"
const ShoppingCartContext = createContext({})

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "FILTER": {
      // const {productName, inventoryCount} = action.payload
      // const filterForProduct = state.filter(()=>{})
      // const updateFilteredProduct = {...filterForProduct, filterForProduct.inventoryCount + inventoryCount }
      // return { ...state, updateFilteredProduct }
      console.log(action.payload)
      return { products: [{ id: "a9326647-9f6e-4dab-bdb5-aec2b0f0768e", productName: "Unbranded Granite Shirt", price: 300, inStock: 6, fastDelivery: true, ratings: 8 }] }
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
