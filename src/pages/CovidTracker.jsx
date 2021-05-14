import { useContext, useState } from 'react'
import Cards from "../containers/stateful-components/Home/Card/Cards"
import BarChart from "../containers/stateful-components/Home/ChartJS/BarChart"
import Country from "../containers/stateful-components/Home/Country/Country"
import CountryPicker from "../containers/stateful-components/Home/Country-picker/CountryPicker"
import useFetch from "../utils/useFetch"
import Loading from '../containers/stateless-components/Loading/Loading'
import LineChart from '../containers/stateful-components/Home/ChartJS/LineChart'
import ApexChartBar from '../containers/stateful-components/Home/ApexChart/ApexChartBar'
import { CoronaContext } from '../App'


const CovidTracker = () => {
    const { state } = useContext(CoronaContext)
    const { loading } = state



    const [country, setCountry] = useState();
    const { data: global } = useFetch('https://disease.sh/v3/covid-19/all');
    const { data: allCountry } = useFetch('https://disease.sh/v3/covid-19/countries');
    const { data: selectedCountry, pending: pendingSelectedCountry } = useFetch('https://disease.sh/v3/covid-19/countries/', country);

    let url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    
    if (country) {
        url = `https://corona.lmao.ninja/v3/covid-19/historical/${country}?lastdays=90`
        console.log('country has selected')
    }
    const { data: countryPast90, pending: pendingCountryPast90, error } = useFetch(url);
    // console.log(countryPast90)

    // {global && console.log(global)}
    // {allCountry && console.log(allCountry)}
    // {selectedCountry && console.log(selectedCountry)}
    // console.log(country)


    return(
        <main className='main'>
            
            {loading ? <Loading /> : <div><Country /><Cards /> </div>}
            {/* <CountryPicker loading={loading} /> */}
            {loading ? <Loading /> : 
                <>
                    <BarChart />
                    {/* {global && selectedCountry && <BarChart globalData={global} selectedCountry={selectedCountry} countryName={country} /> } */}
                    {/* {pendingSelectedCountry && <Loading />} */}
                    {/* <LineChart country={country} countryPast90={countryPast90} error={error} /> */}
                </>
            }
         
        </main>
    )
}

export default CovidTracker