import { m } from 'framer-motion'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChartBar = ({ globalData, selectedCountry, countryName }) => {
    const data = countryName ? selectedCountry : globalData
    const [state, setState] = useState({
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
            data: [data.active, data.recovered, data.deaths, data.cases]
        }]
    })
    
    return (
        <section className='BarChart text-center'>
            <div className="container">
                <ReactApexChart 
                    options={state.options}
                    series={state.series}
                    type='bar'
                    height='400'
                    width='100%'
                />
            </div>
        </section>
    )
}

export default ApexChartBar
