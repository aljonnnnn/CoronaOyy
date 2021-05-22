export const getCountryName = async(dispatch) => {
    try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries')
        const data = await response.json()
        // console.log(data.map(data => data.country))
        dispatch({type: 'GET_COUNTRIES', payload: data.map(data => data.country)})
    }
    catch(error) {
        console.log(error)
    }
}

export const getGlobalData = async(dispatch) => {
    try {
        dispatch({type: 'SET_LOADING'})
        const response = await fetch('https://disease.sh/v3/covid-19/all')
        const data = await response.json()
        // console.log(data)
        setTimeout(() => {
            dispatch({type: 'GET_GLOBAL_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active}})
        }, 500)
    }
    catch(error) {
        console.log(error)
    }
}

export const getCountryData = async(dispatch, country) => {
    try {
        dispatch({type: 'SET_LOADING'})
        const response = await fetch('https://disease.sh/v3/covid-19/countries/' + country)
        const data = await response.json()
        // console.log(data)
        setTimeout(()  => {
            dispatch({ type: 'GET_COUNTRY_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active, flag: data.countryInfo.flag}})
        }, 500)
    }
    catch(error) {
        console.log(error)
    }
}

export const getHistoryData = async(dispatch, country) => {

    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    if (country) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
    }

    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(response.status)
        // console.log(data)

        if (response.status !== 200) {
            throw new Error('Country not found or doesn\'t have any historical data')
        }

        if (data.timeline) {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: {cases: data.timeline.cases, deaths: data.timeline.deaths, recovered: data.timeline.recovered, message: null}})
            }, 500)
        } else {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, message: null}})
            }, 500)
        }
    }
    catch(error) {
        console.log(error.message)
        setTimeout(() => {
            dispatch({type: 'SET_HISTORY', payload: { cases: 0, deaths: 0, recovered: 0, message: error.message} })
        }, 500)
    }
}