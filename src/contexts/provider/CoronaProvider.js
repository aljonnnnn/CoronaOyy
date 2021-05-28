import { createContext, useEffect, useReducer } from "react"
import { getCountryData, getCountryName, getGlobalData, getHistoryData } from "../action/coronaInfoAction"
import { coronaInfoReducer, coronaInfoState } from "../reducer/coronaInfoReducer"

export const CoronaContext = createContext()

const CoronaProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(coronaInfoReducer, coronaInfoState)
    const { countrySelected } = state
    
    useEffect(() => {
        getCountryName(dispatch)
        getHistoryData(dispatch, countrySelected)
        if (countrySelected) {
            getCountryData(dispatch, countrySelected)
        } else {
            getGlobalData(dispatch)
        }
    }, [countrySelected])
    
    return (
        <CoronaContext.Provider value={{state, dispatch}}>
            {children}
        </CoronaContext.Provider>

    )
}


export default CoronaProvider