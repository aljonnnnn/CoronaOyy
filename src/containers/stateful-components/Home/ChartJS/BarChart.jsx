import { useContext, useMemo } from 'react';
import { Bar } from 'react-chartjs-2'
import { CoronaContext } from '../../../../contexts/provider/CoronaProvider';

const BarChart = () => {
    const { state } = useContext(CoronaContext)
    const { currentCountryName, country, global } = state
    const data = currentCountryName ? country : global
    // console.log(data)

    return useMemo(() => {
        return (
            <div className="BarChart text-center">
                <div className="container">
                   {data && 
                    <Bar 
                    data={{
                        labels: ['Active', 'Recoverd', 'Deaths', 'Cases'],
                        datasets: [
                            {
                                label: 'People',
                                data: [data.active, data.recovered, data.deaths, data.cases],
                                backgroundColor: [
                                    'rgba(223, 165, 39, 0.2)',
                                    'rgba(32, 127, 109, 0.2)',
                                    'rgba(40, 57, 66, 0.2)',
                                    'rgba(238, 97, 97, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(223, 165, 39, 1)',
                                    'rgba(32, 127, 109, 1)',
                                    'rgba(40, 57, 66, 1)',
                                    'rgba(238, 97, 97, 1)',
                                ],
                                borderWidth: 1,
                                }
                        ]
                    }} 
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${currentCountryName ? currentCountryName : 'Global'}` },
                        scales: {
                            yAxes: [
                                {
                                ticks: {
                                    beginAtZero: true,
                                },
                                },
                            ],
                            },
                    }} />
                   }
                </div>
            </div>
        )
    }, [data, currentCountryName])
}

export default BarChart