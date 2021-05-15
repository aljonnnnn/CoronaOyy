import { createContext, useEffect, useReducer } from "react"
import { getCountryData, getCountryName, getGlobalData, getHistoryData } from "../action/coronaInfoAction"
import { coronaInfoReducer, infoInitialState } from "../reducer/coronaInfoReducer"

export const CoronaContext = createContext()

const CoronaProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(coronaInfoReducer, infoInitialState)
    const { currentCountryName } = state
    
    useEffect(() => {
        getCountryName(dispatch)
        getHistoryData(dispatch, currentCountryName)
        if (currentCountryName) {
            getCountryData(dispatch, currentCountryName)
        } else {
            getGlobalData(dispatch)
        }
    }, [currentCountryName])
    
    return (
        <CoronaContext.Provider value={{state, dispatch}}>
            {children}
        </CoronaContext.Provider>

    )
}


export default CoronaProvider