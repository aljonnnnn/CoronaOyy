import { useContext } from 'react'
import { CoronaContext } from '../../../../App'

const CountryPicker = () => {
    const {state, dispatch} = useContext(CoronaContext)
    const {countriesName} = state

    const handleCountrySelector = (e) => {
        dispatch({ type: 'CHANGE_COUNTRY_NAME', payload: e.target.value})
    }

    return(
        <form action="" className='country-picker text-center'>
            <select name="" id="" className='country-picker__select' onChange={handleCountrySelector}>
                <option value="" className='country-picker__option'>Global</option>
                {countriesName.map(name => <option key={name} value={name} className='country-picker__option'>{name}</option>)}
            </select>
        </form>
    )
}

export default CountryPicker