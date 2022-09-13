import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode } from "react"
import { createProducts } from "../data/fakerGeneratedShoppingCartData"
const ShoppingCartContext = createContext({})
// id: faker.datatype.uuid(),
// productName: faker.commerce.productName(),
// price: faker.commerce.price(),
// image: faker.image.fashion(),
// inStock: faker.random.numeric(),
// fastDelivery: faker.datatype.boolean(),
// ratings: faker.random.numeric(),

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "FILTER": {
      let { products } = state
      let filteredProducts = products.filter((obj) => {
        return obj.inStock > action.payload.inStock
      })
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
