import { Line } from "react-chartjs-2"
import useFetch from "../../../../utils/useFetch"

const LineChart = ({country}) => {
    // const casesLabel = country ? Object.keys(countryPast90.timeline.cases) : Object.keys(globalPast90.cases)
    // const casesValues = country ? Object.values(countryPast90.timeline.cases) : Object.values(globalPast90.cases)
    // const deathsLabel = country ? Object.keys(countryPast90.timeline.deaths) : Object.keys(globalPast90.deaths)
    // const deathsValues = country ? Object.values(countryPast90.timeline.deaths) : Object.values(globalPast90.deaths)
    // const recoveredLabel = country ? Object.keys(countryPast90.timeline.recovered) : Object.keys(globalPast90.recovered)
    // const recoveredValues = country ? Object.values(countryPast90.timeline.recovered) : Object.values(globalPast90.recovered)
    let casesLabel = []
    let casesValues = [] 
    let deathsLabel = []
    let deathsValues = []
    let recoveredLabel = []
    let recoveredValues = []

    
    const { data: globalPast90, pending: pendingGlobalPast90 } = useFetch('https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90');
    const { data: countryPast90, pending: pendingCountryPast90, error } = useFetch(`https://corona.lmao.ninja/v3/covid-19/historical/Canada?lastdays=90`);
    console.log(globalPast90)
    console.log(countryPast90)


    if (globalPast90 && countryPast90) {
        casesLabel = country ? Object.keys(countryPast90.timeline.cases) : Object.keys(globalPast90.cases)
        casesValues = country ? Object.values(countryPast90.timeline.cases) : Object.values(globalPast90.cases)
        deathsLabel = country ? Object.keys(countryPast90.timeline.deaths) : Object.keys(globalPast90.deaths)
        deathsValues = country ? Object.values(countryPast90.timeline.deaths) : Object.values(globalPast90.deaths)
        recoveredLabel = country ? Object.keys(countryPast90.timeline.recovered) : Object.keys(globalPast90.recovered)
        recoveredValues = country ? Object.values(countryPast90.timeline.recovered) : Object.values(globalPast90.recovered)
    }
    return (
        <div className="lineChart">
            <div className="container">
                <div className="lineChart__flex">
                    <div className="lineChart__box">
                        <div className="lineChart__item">
                            <Line data={{
                                labels: casesLabel,
                                datasets: [
                                    {
                                        label: 'Cases',
                                data: casesValues,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
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
                            }}/>
                        </div>
                    </div>
                    <div className="lineChart__box">
                        <div className="lineChart__item">
                            <Line data={{
                                labels: deathsLabel,
                                datasets: [
                                {
                                    label: 'Deaths',
                                    data: deathsValues,
                                    fill: false,
                                    backgroundColor: '#283942',
                                    borderColor: 'rgba(255, 99, 132, 0.2)',
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
                            }}/>
                        </div>
                    </div>
                    <div className="lineChart__box">
                        <div className="lineChart__item">
                            <Line data={{
                                labels: recoveredLabel,
                                datasets: [
                                    {
                                        data: recoveredValues,
                                        fill: false,
                                        backgroundColor: '#20AC76',
                                        borderColor: 'rgba(255, 99, 132, 0.2)',
                                    },
                                ],
                                legend: { display: false },
                                title: { display: true, text: 'Cases History for The Past Three Months'},
                                scales: {
                                    yAxes: [
                                        {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                        },
                                    ],
                                },
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineChart