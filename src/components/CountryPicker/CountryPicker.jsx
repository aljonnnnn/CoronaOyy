import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedCountry } from '../../redux/covidData/covidDataActions'

const CountryPicker = () => {
    const { selectedCountry } = useSelector(state => state.covidData)
    const { countriesName } = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const handleCountrySelector = useCallback((e) => {
        const countrySelected = e.target.value
        dispatch(setSelectedCountry(countrySelected))
    },[dispatch] )

    return useMemo(() => {
        return(
            <form action="" className='country-picker text-center'>
                <select value={selectedCountry ? selectedCountry : 'Global'} name="" id="" className='country-picker__select' onChange={handleCountrySelector}>
                    <option value="" className='country-picker__option'>Global</option>
                    {countriesName.map(name => <option key={name} value={name} className='country-picker__option'>{name}</option>)}
                </select>
            </form>
        )
    }, [countriesName, selectedCountry, handleCountrySelector])
}

export default CountryPicker