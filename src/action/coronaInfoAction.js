import axios from 'axios'


export const getCountryName = (dispatch) => {
    axios.get('https://disease.sh/v3/covid-19/countries')
    .then(res => {
        // console.log(res.data)
        dispatch({type: 'GET_COUNTRIES', payload: res.data.map(country => country.country)})
    })
    .catch(error => console.log(error))
}


export const getGlobalData = (dispatch) => {
    axios.get('https://disease.sh/v3/covid-19/all')
    .then(res => {
        // console.log(res.data)
        dispatch({type: 'SET_LOADING'})
        setTimeout(() => {
            dispatch({type: 'GET_GLOBAL_DATA', payload: {cases: res.data.cases, deaths: res.data.deaths, recovered: res.data.recovered, active: res.data.active} })
        }, 500)
    })
    .catch(error => console.log(error))
}

export const getCountryData = (dispatch, country) => {
    axios.get('https://disease.sh/v3/covid-19/countries/' + country)
    .then(res => {
        // console.log(res.data)
        dispatch({type: 'SET_LOADING'})
        setTimeout(()  => {
            dispatch({ type: 'GET_COUNTRY_DATA', payload: {cases: res.data.cases, deaths: res.data.deaths, recovered: res.data.recovered, active: res.data.active, flag: res.data.countryInfo.flag}})
        }, 500)
    })
    .catch(error => console.log(error))
}

export const getHistoryData = (dispatch, country) => {

    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    if (country) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
    }

    axios.get(url)
    .then(res => {
        // console.log(res.data)
        if (res.data.timeline) {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: { cases: res.data.timeline.cases, deaths: res.data.timeline.deaths, recovered: res.data.timeline.recovered, message: null } })
            }, 500)
        } else {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: { cases: res.data.cases, deaths: res.data.deaths, recovered: res.data.recovered, message: null} })
            }, 500)
        }
    })
    .catch(error => {
        console.log(error.message)
        setTimeout(() => {
            dispatch({type: 'SET_HISTORY', payload: { cases: 0, deaths: 0, recovered: 0, message: "Country not found or doesn't have any historical data"} })
        }, 500)
    })
}