import { createContext, useReducer, useContext, ReactNode } from "react"

const ReactHookFormContext = createContext("")

export const useReactHookFormData = () => {
  return useContext(ReactHookFormContext)
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NAME_INPUT": {
      return { ...state }
    }
    default:
      return state
  }
}

const ReactHookFormProvider = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useReducer(reducer, { initialState: "" })

  return <ReactHookFormContext.Provider value={{ state, dispatch }}>{children}</ReactHookFormContext.Provider>

  // return <div>{children}</div>
}

export default ReactHookFormProvider
