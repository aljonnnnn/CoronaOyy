import { useState } from 'react'
import Cards from "../Cards"
import Chart from "../Chart"
import Country from "../Country"
import CountryPicker from "../CountryPicker"
import useFetch from "../../API/useFetch"

const CovidTracker = () => {
    const [country, setCountry] = useState();
    const { data: global } = useFetch('https://disease.sh/v3/covid-19/all');
    const { data: allCountry } = useFetch('https://disease.sh/v3/covid-19/countries');
    const { data: selectedCountry } = useFetch('https://disease.sh/v3/covid-19/countries/', country);

    // {global && console.log(global)}
    // {allCountry && console.log(allCountry)}
    // {selectedCountry && console.log(selectedCountry)}

    // console.log(country)

    const handleSelectCountry = (e) => {
        setCountry(e.target.value)
    }

    return(
        <main className='main'>
            {global && selectedCountry && <Country globalData={global} selectedCountry={selectedCountry} countryName={country} />}
            {global && selectedCountry && <Cards globalData={global} selectedCountry={selectedCountry} countryName={country} />}
            {allCountry && <CountryPicker onChanged={handleSelectCountry} countryData={allCountry}/>}
            {global && selectedCountry && <Chart globalData={global} selectedCountry={selectedCountry} countryName={country} />}
        </main>
    )
}

export default CovidTracker