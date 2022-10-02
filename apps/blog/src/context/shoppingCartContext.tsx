import { createContext, useContext, useReducer, useCallback, useMemo, ReactNode }, React from "react"

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

type ProductType = { id: number; name: string; price: number}

type InitialStateType = {
  products: ProductType[];
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

const ShoppingCartContext = createContext<InitialStateType>(initialState)

export const productReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT": 
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ]
    case "DELETE_PRODUCT":
      return [
        ...state.filter(product => product.id !== action.payload.id)
      ]
    default: 
      return state
  }
}

export const shoppingCartReducer = (state, action) =>{
  switch(action.type){
    case "ADD_PRODUCT":
      return state + 1
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
