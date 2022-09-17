import { createContext, useContext, ReactNode, useReducer, useEffect, useMemo } from "react"

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
  type: "LOCAL_STATE" | "MENU_DROPDOWN_OPEN" | "SIDE_DRAWER_OPEN" | "MODAL_OPEN" | "SHOPPING_CART_OPEN"
  payload: object | string | number | boolean
}

interface IUiContext {
  state: any
  dispatch: any
}

export const UiContext = createContext<IUiContext>({ state: null, dispatch: null })

function reducer(state: UiReducerStateProps, action: UiReducerAction) {
  switch (action.type) {
    case "LOCAL_STATE":
      return { ...state, ...action.payload }
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
  const sharedState = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    const uiLocalContextState = JSON.stringify(localStorage.getItem("uiLocalContextState"))
    if (uiLocalContextState) {
      dispatch({ type: "LOCAL_STATE", payload: uiLocalContextState })
    }
  }, [])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("uiLocalContextState", JSON.stringify(state))
    }
  }, [state])

  return <UiContext.Provider value={sharedState}>{children}</UiContext.Provider>
}

export default UiContextProvider

export function useUIContext() {
  return useContext(UiContext)
}
