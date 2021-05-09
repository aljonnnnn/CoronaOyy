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
        dispatch({type: 'GET_GLOBAL_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active} })
        // console.log(data)
    })
}

export const getCountryData = (dispatch, country) => {
    fetch('https://disease.sh/v3/covid-19/countries/' + country)
    .then(res => res.json())
    .then(data => {
        dispatch({ type: 'GET_COUNTRY_DATA', payload: {cases: data.cases, deaths: data.deaths, recovered: data.recovered, active: data.active, flag: data.countryInfo.flag}})
        // console.log(data)
    })
}