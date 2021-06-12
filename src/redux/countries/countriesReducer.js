import { FETCH_COUNTRIES_NAME_ERROR, FETCH_COUNTRIES_NAME_REQUEST, FETCH_COUNTRIES_NAME_SUCCESS } from "./countriesTypes"

const initialState = {
    countriesName: [],
    loading: false,
    error: '',
}


export const countriesNameReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_NAME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_COUNTRIES_NAME_SUCCESS:
            return {
                ...state,
                loading: false,
                countriesName: action.payload
            }
        case FETCH_COUNTRIES_NAME_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}