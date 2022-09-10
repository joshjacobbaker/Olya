import { createContext, useContext, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"
const ShoppingCartContext = createContext({})
const productsList = createProducts()

const ShoppingCartContextProvider = ({ children }: { children: ReactNode }) => {
  console.log(productsList)
  return <ShoppingCartContext.Provider value={productsList}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
