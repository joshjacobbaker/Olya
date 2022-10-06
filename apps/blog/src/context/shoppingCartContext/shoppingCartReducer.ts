type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  CREATE_PRODUCT = "CREATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  INCREMENT_TOTAL_CART_COUNT = "ADD_TOTAL_CART_COUNT",
  DECREMENT_TOTAL_CART_COUNT = "DEDUCT_TOTAL_CART_COUNT",
  LOCAL_STORAGE_STATE = "LOCAL_STORAGE_STATE",
}

type ProductType = {
  id: number
  name: string
  price: number
}

type ProductPayload = {
  [Types.CREATE_PRODUCT]: {
    id: number
    name: string
    price: number
  }
  [Types.DELETE_PRODUCT]: {
    id: number
  }
}

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>]

export const productReducer = (state: ProductType[], action: ProductActions | ShoppingCartActions | MainReducerActions) => {
  switch (action.type) {
    case Types.CREATE_PRODUCT:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ]
    case Types.DELETE_PRODUCT:
      return [...state.filter((product) => product.id !== action.payload.id)]
    default:
      return state
  }
}

// Shopping Cart

type ShoppingCartPayload = {
  [Types.INCREMENT_TOTAL_CART_COUNT]: undefined
  [Types.DECREMENT_TOTAL_CART_COUNT]: undefined
}

export type ShoppingCartActions = ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]

export const shoppingCartReducer = (state: number, action: ProductActions | ShoppingCartActions | MainReducerActions) => {
  switch (action.type) {
    case Types.INCREMENT_TOTAL_CART_COUNT:
      return state + 1
    case Types.DECREMENT_TOTAL_CART_COUNT:
      return state > 0 ? state - 1 : 0
    default:
      return state
  }
}

// Main Reducer

type MainReducerPayload = {
  [Types.LOCAL_STORAGE_STATE]: undefined
}

export type MainReducerActions = ActionMap<MainReducerPayload>[keyof ActionMap<MainReducerPayload>]

export type InitialStateType = {
  products: ProductType[]
  shoppingCart: number
}

export const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions | MainReducerActions) => {
  switch (action.type) {
    // case Types.LOCAL_STORAGE_STATE:
    //   return null
    default:
      return {
        products: productReducer(products, action),
        shoppingCart: shoppingCartReducer(shoppingCart, action),
      }
  }
}
