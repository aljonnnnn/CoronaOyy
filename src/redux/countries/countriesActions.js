import { FETCH_COUNTRIES_NAME_ERROR, FETCH_COUNTRIES_NAME_REQUEST, FETCH_COUNTRIES_NAME_SUCCESS } from "./countriesTypes"

export const countriesNameSuccess = (allName) => {
    return {
        type: FETCH_COUNTRIES_NAME_SUCCESS,
        payload: allName
    }
}

export const countriesNameRequest = () => {
    return {
        type: FETCH_COUNTRIES_NAME_REQUEST,
    }
}

export const countriesNameFailure = (message) => {
    return {
        type: FETCH_COUNTRIES_NAME_ERROR,
        payload: message
    }
}