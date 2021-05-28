import { useContext, useMemo, useState } from 'react'
import Cards from "../containers/stateful-components/Home/Card/Cards"
import BarChart from "../containers/stateful-components/Home/ChartJS/BarChart"
import Country from "../containers/stateful-components/Home/Country/Country"
import Loading from '../containers/stateless-components/Loading/Loading'
import LineChart from '../containers/stateful-components/Home/ChartJS/LineChart'
import { CoronaContext } from '../contexts/provider/CoronaProvider'
import CountryPicker from "../containers/stateful-components/Home/Country-picker/CountryPicker"


const CovidTracker = () => {
    const { state } = useContext(CoronaContext)
    const { loading } = state

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
             
            </main>
        )
    }, [loading])
}

export default CovidTracker