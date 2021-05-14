import { useContext } from 'react'
import ReactApexChart from 'react-apexcharts'
import { CoronaContext } from '../../../../App'

const ApexChartBar = () => {
    
    const { state } = useContext(CoronaContext)
    const { currentCountryName, country, global } = state

    const data = currentCountryName ? country : global

    const displayData = {
        options: {
            chart: {
                background: "#f4f4f4",
                foreColor: "#333"
            },
            xaxis: {
                categories: [
                    'Active',
                    'Recovered',
                    'Deaths',
                    'Cases',
                ],
                
            },
            colors: ['#EE6161', '#20AC76', '#283942', '#EE6161'],
            // fill: {
            //     colors: ['#9C27B0', '#E91E63', '#9C27B0']
            // },
            dataLabels: {
                enabled: false
            },
        },
        series: [{
            name: "People",
            data: data ? [data.active, data.recovered, data.deaths, data.cases] : []
        }]
    }

    
    return (
        <section className='BarChart text-center'>
            {
                country || global ? 
                <div className="container">
                    <ReactApexChart 
                        options={displayData.options}
                        series={displayData.series}
                        type='bar'
                        height='400'
                        width='100%'
                    />
                </div> : null
            }
        </section>
    )
}

export default ApexChartBar
