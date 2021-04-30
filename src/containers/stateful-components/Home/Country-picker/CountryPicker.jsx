
const CountryPicker = ({onChanged, countryData}) => {
    // console.log(countryData)
    return(
        <form action="" className='country-picker text-center'>
            <select name="" id="" className='country-picker__select' onChange={onChanged}>
                <option value="" className='country-picker__option'>Global</option>
                {countryData.map(({country : countryName }) => <option key={countryName} value={countryName} className='country-picker__option'>{countryName}</option>)}
            </select>
        </form>
    )
}

export default CountryPicker