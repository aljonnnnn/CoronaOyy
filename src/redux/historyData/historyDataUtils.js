import { historyData, historyError, historyRequest } from "./historyDataActions"

export const fetchHistoryData = (countrySelected) => {
    return (dispatch) => {

        let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
        if (countrySelected) {
            url = `https://corona.lmao.ninja/v3/covid-19/historical/${countrySelected}?lastdays=90`
        }

        dispatch(historyRequest())

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                throw new Error('Country not found or doesn\'t have any historical data')
            } else if (data.timeline) {
                setTimeout(() => {
                    const Data =  {cases: data.timeline.cases, deaths: data.timeline.deaths, recovered: data.timeline.recovered, message: null}
                    dispatch(historyData(Data))
                }, 500)
            } else {
                setTimeout(() => {
                    const Data = {cases: data.cases, deaths: data.deaths, recovered: data.recovered, message: null}
                    dispatch(historyData(Data))
                }, 500)
            }
        })
        .catch(error => {
            console.log(error.message)
            dispatch(historyError(error.message))
            setTimeout(() => {
                const Data = { cases: 0, deaths: 0, recovered: 0, message: error.message }
                dispatch(historyData(Data))
            }, 500)
        })
    }
}