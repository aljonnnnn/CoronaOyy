import { useContext } from 'react'
import Cards from "../containers/stateful-components/Home/Card/Cards"
import BarChart from "../containers/stateful-components/Home/ChartJS/BarChart"
import Country from "../containers/stateful-components/Home/Country/Country"
import CountryPicker from "../containers/stateful-components/Home/Country-picker/CountryPicker"
import Loading from '../containers/stateless-components/Loading/Loading'
import LineChart from '../containers/stateful-components/Home/ChartJS/LineChart'
import ApexChartBar from '../containers/stateful-components/Home/ApexChart/ApexChartBar'
import { CoronaContext } from '../App'


const CovidTracker = () => {
    const { state } = useContext(CoronaContext)
    const { loading } = state

    return(
        <main className='main'>
            
            {loading ? <Loading /> : <div><Country /><Cards /> </div>}
            {/* <CountryPicker loading={loading} /> */}
            {loading ? <Loading /> : 
                <>
                    <BarChart />
                    {/* <LineChart /> */}
                </>
            }
         
        </main>
    )
}

export default CovidTracker