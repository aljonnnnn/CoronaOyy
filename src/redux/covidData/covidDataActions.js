import { FETCH_COUNTRY_DATA_SUCCESS, FETCH_COVID_DATA_ERROR, FETCH_COVID_DATA_REQUEST, FETCH_GLOBAL_DATA_SUCCESS, SET_SELECTED_COUNTRY } from "./covidDataTypes"

export const setSelectedCountry = (country) => {
    return {
        type: SET_SELECTED_COUNTRY,
        payload: country
    }
}
export const globalData = (globalData) => {
    return {
        type: FETCH_GLOBAL_DATA_SUCCESS,
        payload: globalData
    }
}

export const countryData = (countryData) => {
    return {
        type: FETCH_COUNTRY_DATA_SUCCESS,
        payload: countryData
    }
}

export const covidDataRequest = () => {
    return {
        type: FETCH_COVID_DATA_REQUEST,
    }
}

export const covidDataError = (message) => {
    return {
        type: FETCH_COVID_DATA_ERROR,
        payload: message
    }
}

