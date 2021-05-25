export const getCountryName = async(dispatch) => {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'GET_COUNTRIES', payload: data.map(data => data.country)})
    })
    .catch(error => {
        console.log(error)
    })
}

export const getGlobalData = async(dispatch) => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'SET_LOADING'})
        setTimeout(() => {
            dispatch({type: 'GET_GLOBAL_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active}})
        }, 500)
    })
    .catch(error => {
        console.log(error)
    })
}

export const getCountryData = async(dispatch, country) => {
    fetch('https://disease.sh/v3/covid-19/countries/' + country)
    .then(response => response.json())
    .then(data => {
        dispatch({type: 'SET_LOADING'})
        setTimeout(()  => {
            dispatch({ type: 'GET_COUNTRY_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active, flag: data.countryInfo.flag}})
        }, 500)
    })
    .catch(error => {
        console.log(error)
    })
}

export const getHistoryData = async(dispatch, country) => {

    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    if (country) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            throw new Error('Country not found or doesn\'t have any historical data')
        } else if (data.timeline) {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: {cases: data.timeline.cases, deaths: data.timeline.deaths, recovered: data.timeline.recovered, message: null}})
            }, 500)
        } else {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, message: null}})
            }, 500)
        }
    })
    .catch(error => {
        console.log(error)
        setTimeout(() => {
            dispatch({type: 'SET_HISTORY', payload: { cases: 0, deaths: 0, recovered: 0, message: error.message } })
        }, 500)
    })
}