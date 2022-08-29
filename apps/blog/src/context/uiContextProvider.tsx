import { createContext, ReactNode, useReducer } from "react"

interface UiReducerStateProps {
  menuDropdownOpen: boolean
  sideDrawerOpen: boolean
  modalOpen: boolean
  shoppingCartOpen: boolean
}

const initialState: UiReducerStateProps = {
  menuDropdownOpen: false,
  sideDrawerOpen: false,
  modalOpen: false,
  shoppingCartOpen: false,
}

interface UiReducerAction {
  type: "MENU_DROPDOWN_OPEN" | "SIDE_DRAWER_OPEN" | "MODAL_OPEN" | "SHOPPING_CART_OPEN"
}

interface IUiContext {
  state: any
  dispatch: any
}

export const UiContext = createContext<IUiContext>({ state: null, dispatch: null })

function reducer(state: UiReducerStateProps, action: UiReducerAction) {
  switch (action.type) {
    case "MENU_DROPDOWN_OPEN":
      return { ...state, menuDropdownOpen: !state.menuDropdownOpen }
    case "SIDE_DRAWER_OPEN":
      return { ...state, sideDrawerOpen: !state.sideDrawerOpen }
    case "MODAL_OPEN":
      return { ...state, modalOpen: !state.modalOpen }
    case "SHOPPING_CART_OPEN":
      return { ...state, shoppingCartOpen: !state.shoppingCartOpen }
    default:
      return state
  }
}

interface UiContextProviderProps {
  children: ReactNode
}

const UiContextProvider = ({ children }: UiContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>
}

export default UiContextProvider
