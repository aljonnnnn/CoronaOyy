import { CHANGE_COUNTRY_SELECT, GET_COUNTRIES, GET_COUNTRY_DATA, GET_GLOBAL_DATA, SET_HISTORY, SET_HISTORY_ERROR, SET_LOADING } from "../types/coronaInfoTypes"

export const coronaInfoState = {
    countriesName: [],
    country: null,
    global: null,
    countrySelected: null,
    loading: false,
    history: null,
    historyError: null,
}


export const coronaInfoReducer = (state, {type, payload}) => {
    switch(type) {
        case GET_COUNTRIES :
            return {
                ...state,
                countriesName: payload,
            }
        case GET_GLOBAL_DATA :
            return {
                ...state,
                country: null,
                global: payload,
                loading: false,
            }
        case GET_COUNTRY_DATA :
            return {
                ...state,
                global: null,
                country: payload,
                loading: false,
            }
        case CHANGE_COUNTRY_SELECT :
            return {
                ...state,
                countrySelected: payload,
                historyError: null

            }
        case SET_LOADING :
            return {
                ...state,
                loading: true
            }
        case SET_HISTORY :
            return {
                ...state,
                history : payload,
            }
        case SET_HISTORY_ERROR : 
            return {
                ...state,
                historyError: payload
            }
        default: 
            return state
    }
}
