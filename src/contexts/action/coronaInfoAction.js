import { CHANGE_COUNTRY_SELECT, GET_COUNTRY_DATA, GET_COUNTRY_NAME, GET_GLOBAL_DATA, GET_HISTORY_DATA, SET_HISTORY_ERROR, SET_LOADING } from "../types/coronaInfoTypes"


export const getCountryName = (allName) => {
    return {
        type: GET_COUNTRY_NAME,
        payload: allName
    }
}


export const changeCountrySelected = (countrySelected) => {
    return {
        type: CHANGE_COUNTRY_SELECT,
        payload: countrySelected
    }
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getGlobalData = (globalData) => {
    return {
        type: GET_GLOBAL_DATA,
        payload: globalData
    }
}


export const getCountryData = (coutryData) => {
    return {
        type: GET_COUNTRY_DATA,
        payload: coutryData
    }
}

export const getHistoryData = (historyData) => {
    return {
        type: GET_HISTORY_DATA,
        payload: historyData
    }
}

export const setErrorMessage = (message) => {
    return {
        type: SET_HISTORY_ERROR,
        payload: message
    }
}