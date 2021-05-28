import { useContext, useMemo } from "react"
import { Line } from "react-chartjs-2"
import { CoronaContext } from "../../../../contexts/provider/CoronaProvider"

const LineChart = () => {
    const { state } = useContext(CoronaContext)
    // console.log(state)
    const { history, historyError } = state

    return useMemo(() => {
        return (
            <div className="lineChart">
                <div className="container">
                    {historyError ? <h2 className="text-center">This {historyError}</h2> : null}
                    <div className="lineChart__flex">
                        <div className="lineChart__box">
                            <div className="lineChart__item">
                                {
                                    history ? 
                                    <Line data={{
                                        labels: Object.keys(history.cases),
                                        datasets: [
                                            {
                                                label: 'Cases',
                                                data: Object.values(history.cases),
                                                fill: false,
                                                backgroundColor: 'rgba(238, 97, 97, 1)',
                                                borderColor: 'rgba(238, 97, 97, 0.2',
                                            },
                                        ],
                                        scales: {
                                            yAxes: [
                                                {
                                                    ticks: {
                                                        beginAtZero: true,
                                                    },
                                                },
                                            ],
                                        },
                                    }}
                                    options={{
                                        legend: { display: false },
                                        title: { display: true, text: history.message ? history.message : 'Cases History for the Past Three Months' }
                                    }}
                                        
                                    /> : null
                                }
                            </div>
                        </div>
                        <div className="lineChart__box">
                            <div className="lineChart__item">
                                {
                                    history ? 
                                    <Line data={{
                                        labels: Object.keys(history.deaths),
                                        datasets: [
                                            {
                                                label: 'Deaths',
                                                data: Object.values(history.deaths),
                                                fill: false,
                                                backgroundColor: 'rgba(40, 57, 66, 1)',
                                                borderColor: 'rgba(40, 57, 66, 0.2)',
                                            },
                                        ],
                                        scales: {
                                            yAxes: [
                                                {
                                                    ticks: {
                                                        beginAtZero: true,
                                                    },
                                                },
                                            ],
                                        },
                                    }}
                                    options={{
                                        legend: { display: false },
                                        title: { display: true, text: history.message ? history.message : 'Deaths History for the Past Three Months' }
                                    }}
                                        
                                    /> : null
                                }
                            </div>
                        </div>
                        <div className="lineChart__box">
                            <div className="lineChart__item">
                                {
                                    history ? 
                                    <Line data={{
                                        labels: Object.keys(history.recovered),
                                        datasets: [
                                            {
                                                label: 'Recovered',
                                                data: Object.values(history.recovered),
                                                fill: false,
                                                backgroundColor: 'rgba(32, 127, 109, 1)',
                                                borderColor: 'rgba(32, 127, 109, 0.2)',
                                            },
                                        ],
                                        scales: {
                                            yAxes: [
                                                {
                                                    ticks: {
                                                        beginAtZero: true,
                                                    },
                                                },
                                            ],
                                        },
                                    }}
                                    options={{
                                        legend: { display: false },
                                        title: { display: true, text: history.message ? history.message : 'Recovered History for the Past Three Months' }
                                    }}
                                        
                                    /> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }, [history, historyError])
}

export default LineChart