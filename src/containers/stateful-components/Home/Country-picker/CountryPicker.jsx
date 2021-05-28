import { useCallback, useContext, useMemo } from 'react'
import { CoronaContext } from '../../../../contexts/provider/CoronaProvider'

const CountryPicker = () => {
    const {state, dispatch} = useContext(CoronaContext)
    const {countriesName, countrySelected} = state
    const handleCountrySelector = useCallback((e) => {
        const countrySelected = e.target.value
        dispatch({ type: 'CHANGE_COUNTRY_SELECT', payload: countrySelected})
    },[dispatch] )

    return useMemo(() => {
        return(
            <form action="" className='country-picker text-center'>
                <select value={countrySelected ? countrySelected : 'Global'} name="" id="" className='country-picker__select' onChange={handleCountrySelector}>
                    <option value="" className='country-picker__option'>Global</option>
                    {countriesName.map(name => <option key={name} value={name} className='country-picker__option'>{name}</option>)}
                </select>
            </form>
        )
    }, [countriesName, countrySelected, handleCountrySelector])
}

export default CountryPicker