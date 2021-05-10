export const infoInitialState = {
    countriesName: [],
    country: null,
    global: null,
    currentCountryName: null,
    error: null,
    loading: false,
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
                currentCountryName: payload
            }
        case 'SET_LOADING' :
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}
