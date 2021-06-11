import { getCountryData, getCountryName, getGlobalData, getHistoryData, setErrorMessage, setLoading } from "../action/coronaInfoAction"


export const fetchCountryName = (dispatch) => {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => {
        const allName = data.map(data => data.country)
        dispatch(getCountryName(allName))
    })
    .catch(error => {
        console.log(error)
    })
}

export const fetchGlobalData = (dispatch) => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
        dispatch(setLoading())
        const globalData = {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active}
        setTimeout(() => {
            dispatch(getGlobalData(globalData))
        }, 500)
    })
    .catch(error => {
        console.log(error)
    })
}


export const fetchCountryData = (dispatch, selectedCountry) => {
    fetch('https://disease.sh/v3/covid-19/countries/' + selectedCountry)
    .then(response => response.json())
    .then(data => {
        dispatch(setLoading())
        const coutryData = {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active, flag: data.countryInfo.flag, countryName: data.country}
        setTimeout(()  => {
            dispatch(getCountryData(coutryData))
        }, 500)
    })
    .catch(error => {
        console.log(error)
    })
}


export const fetchHistoryData = (dispatch, countrySelected) => {
    
    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    if (countrySelected) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${countrySelected}?lastdays=90`
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            throw new Error('Country not found or doesn\'t have any historical data')
        } else if (data.timeline) {
            setTimeout(() => {
                const historyData =  {cases: data.timeline.cases, deaths: data.timeline.deaths, recovered: data.timeline.recovered, message: null}
                dispatch(getHistoryData(historyData))
            }, 500)
        } else {
            setTimeout(() => {
                const historyData = {cases: data.cases, deaths: data.deaths, recovered: data.recovered, message: null}
                dispatch(getHistoryData(historyData))
            }, 500)
        }
    })
    .catch(error => {
        dispatch(setErrorMessage(error.message))
        setTimeout(() => {
            const historyData = { cases: 0, deaths: 0, recovered: 0, message: error.message }
            dispatch(getHistoryData(historyData))
        }, 500)
    })
}