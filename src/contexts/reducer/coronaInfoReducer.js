import { CHANGE_COUNTRY_SELECT, GET_COUNTRY_DATA, GET_COUNTRY_NAME, GET_GLOBAL_DATA, GET_HISTORY_DATA, SET_HISTORY_ERROR, SET_LOADING } from "../types/coronaInfoTypes"

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
        case GET_COUNTRY_NAME :
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
        case GET_HISTORY_DATA:
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
