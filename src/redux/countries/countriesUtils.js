import { countriesNameFailure, countriesNameRequest, countriesNameSuccess } from "./countriesActions"

export const fetchCountriesName = () => {
    return (dispatch) => {
        dispatch(countriesNameRequest())
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(data => {
            const allName = data.map(countries => countries.country )
            dispatch(countriesNameSuccess(allName))
        })
        .catch(error => {
            dispatch(countriesNameFailure(error.message))
        })
    }
 }
//  useDeprecatedAnimatedState