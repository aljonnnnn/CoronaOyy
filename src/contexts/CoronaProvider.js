import { createContext, useEffect, useReducer } from "react"
import { getCountryData, getCountryName, getGlobalData } from "../action/coronaInfoAction"
import { coronaInfoReducer, infoInitialState } from "../reducer/coronaInfoReducer"

export const CoronaContext = createContext()

const CoronaProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(coronaInfoReducer, infoInitialState)
    
    useEffect(() => {
        getCountryName(dispatch)
        if (state.currentCountryName) {
            getCountryData(dispatch, state.currentCountryName)
        } else {
            getGlobalData(dispatch)
        }
    }, [state.currentCountryName])
    
    return (
        <CoronaContext.Provider value={{state, dispatch}}>
            {children}
        </CoronaContext.Provider>

    )
}


export default CoronaProvider