import React, { createContext, useReducer, useContext, ReactNode } from "react"

const ReactHookFormContext = createContext<
  | [
      {
        count: number
      },
      React.Dispatch<{
        type: string
        payload?: object
      }>
    ]
>([{ count: 0 }, () => {}])

export const useReactHookFormData = () => {
  return useContext(ReactHookFormContext)
}

function reducer(state: { count: number }, action: { type: string; payload?: object }) {
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

const ReactHookFormProvider = ({ children }: { children: ReactNode }) => {
  const reducerContext = useReducer(reducer, { count: 0 })

  return <ReactHookFormContext.Provider value={reducerContext}>{children}</ReactHookFormContext.Provider>

  // return <div>{children}</div>
}

export default ReactHookFormProvider
