import globalICon from '../img/global.svg'

const Country = ({globalData, selectedCountry: {country, countryInfo }, countryName}) => {
    // console.log(globalData)
    // console.log(selectedCountry)
    // console.log(countryName)
    // console.log(selectedCountry.countryInfo.flag)
    // {countryInfo && const data = countryName ? country : globalData}
    // const flag = countryName ? selectedCountry.countryInfo.flag : globalICon
    // console.log(flag)
    // console.log(countryName)
    // console.log(countryInfo)

    return (
        <div className="country">
            <span className='country__name'>{countryName ? country : 'Global'}</span>
            <img className='country__flag' src={countryInfo ? countryInfo.flag : globalICon} alt=""/>
        </div>
    )
}

export default Country;