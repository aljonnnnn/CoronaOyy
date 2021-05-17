import { useContext, useMemo, useState } from 'react'
import Cards from "../containers/stateful-components/Home/Card/Cards"
import BarChart from "../containers/stateful-components/Home/ChartJS/BarChart"
import Country from "../containers/stateful-components/Home/Country/Country"
import Loading from '../containers/stateless-components/Loading/Loading'
import LineChart from '../containers/stateful-components/Home/ChartJS/LineChart'
import { CoronaContext } from '../contexts/CoronaProvider'
import ApexChartBar from '../containers/stateful-components/Home/ApexChart/ApexChartBar'
import CountryPicker from "../containers/stateful-components/Home/Country-picker/CountryPicker"


const CovidTracker = () => {
    const { state } = useContext(CoronaContext)
    const { loading } = state


    // my app is optimize :)
    // uncomment button jsx element then increment button in line 50 and console.log in line 28   // if you request new data in country or global component will re-render
    // each dispatch request has own render
    // keep learning :)

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(preCount => preCount + 1)
    }

    // console.log(count)

    return useMemo(() => {
        return(
            <main className='main'>
                
                {loading ? <Loading /> 
                    : 
                    <div>
                        <Country />
                        <Cards /> 
                        {/* <CountryPicker /> */}
                    </div>}
    
                {loading ? <Loading /> 
                    : 
                    <>
                        <BarChart />
                        <LineChart />
                    </>
                }
    
                <button onClick={() => Increment()}>Increment</button>
             
            </main>
        )
    }, [loading])
}

export default CovidTracker