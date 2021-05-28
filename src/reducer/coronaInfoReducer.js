export const infoInitialState = {
    countriesName: [],
    country: null,
    global: null,
    currentCountryName: null,
    loading: false,
    history: null,
    historyError: null,
}


export const coronaInfoReducer = (state, {type, payload}) => {
    switch(type) {
        case 'GET_COUNTRIES' :
            return {
                ...state,
                countriesName: payload,
            }
        case 'GET_GLOBAL_DATA' :
            return {
                ...state,
                country: null,
                global: payload,
                loading: false,
            }
        case 'GET_COUNTRY_DATA' :
            return {
                ...state,
                global: null,
                country: payload,
                loading: false,
            }
        case 'CHANGE_COUNTRY_NAME' :
            return {
                ...state,
                currentCountryName: payload,
                historyError: null

            }
        case 'SET_LOADING' :
            return {
                ...state,
                loading: true
            }
        case 'SET_HISTORY' :
            return {
                ...state,
                history : payload,
            }
        case 'SET_HISTORY_ERROR' : 
            return {
                ...state,
                historyError: payload
            }
        default: 
            return state
    }
}
