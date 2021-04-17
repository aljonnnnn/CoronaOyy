import Cards from "./Cards"
import Chart from "./Chart"
import Country from "./Country"
import CountryPicker from "./CountryPicker"

const CovidTracker = () => {
    return(
        <div>
            <Country />
            <Cards />
            <CountryPicker />
            <Chart />
        </div>
    )
}

export default CovidTracker