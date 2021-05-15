export const getCountryName = (dispatch) => {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'GET_COUNTRIES', payload: data.map(country => country.country)})
        // console.log()
    })
    .catch(error => {
        console.log(error)
    })
}

export const getGlobalData = (dispatch) => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'SET_LOADING'})
        // fake fetching load:)
        setTimeout(() => {
            dispatch({type: 'GET_GLOBAL_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active} }) 
        }, 500);
        // console.log(data)
    })
}

export const getCountryData = (dispatch, country) => {
    fetch('https://disease.sh/v3/covid-19/countries/' + country)
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'SET_LOADING'})
        // fake fetching load:)
        setTimeout(()  => {
            dispatch({ type: 'GET_COUNTRY_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active, flag: data.countryInfo.flag}})
        }, 500)
        // console.log(data)
    })
}

export const getHistoryData = (dispatch, country) => {

    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    if (country) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
    }

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        if (data.timeline) {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: { cases: data.timeline.cases, deaths: data.timeline.deaths, recovered: data.timeline.recovered, message: null } })
            }, 500)
        } else if (data.message) {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: { cases: 0, deaths: 0, recovered: 0, message: data.message } })
            }, 500)
        } else {
            setTimeout(() => {
                dispatch({type: 'SET_HISTORY', payload: { cases: data.cases, deaths: data.deaths, recovered: data.recovered, message: null} })
            }, 500)
        }
    })
}