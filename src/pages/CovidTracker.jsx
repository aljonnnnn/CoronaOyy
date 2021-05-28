import { useContext, useMemo, } from 'react'
import Loading from '../containers/Loading/Loading'
import { CoronaContext } from '../contexts/provider/CoronaProvider'
import Cards from '../components/Card/Cards'
import Country from '../components/Country/Country'
import BarChart from '../components/ChartJS/BarChart'
import LineChart from '../components/ChartJS/LineChart'


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