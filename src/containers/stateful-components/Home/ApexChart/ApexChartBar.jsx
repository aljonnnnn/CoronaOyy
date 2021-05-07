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
                fill: {
                    colors: ["#F44336"]
                },
                    dataLabels: {
                        enabled: false
                },
            }
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
                    height='500'
                    width='100%'
                />
            </div>
        </section>
    )
}

export default ApexChartBar
