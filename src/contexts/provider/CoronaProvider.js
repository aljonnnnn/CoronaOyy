import { createContext, useEffect, useReducer } from "react"
import { coronaInfoReducer, coronaInfoState } from "../reducer/coronaInfoReducer"
import { fetchCountryData, fetchCountryName, fetchGlobalData, fetchHistoryData } from "../utils/util"

export const CoronaContext = createContext()

const CoronaProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(coronaInfoReducer, coronaInfoState)
    const { countrySelected } = state
    
    useEffect(() => {
        fetchCountryName(dispatch)
        fetchHistoryData(dispatch, countrySelected)
        if (countrySelected) {
            fetchCountryData(dispatch, countrySelected)
        } else {
            fetchGlobalData(dispatch)
        }
    }, [countrySelected])
    
    return (
        <CoronaContext.Provider value={{state, dispatch}}>
            {children}
        </CoronaContext.Provider>

    )
}


export default CoronaProvider