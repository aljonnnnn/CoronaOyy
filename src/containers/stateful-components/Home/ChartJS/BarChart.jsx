import { Bar, Line } from 'react-chartjs-2'
import useFetch from '../../../../utils/useFetch';

const BarChart = ({ globalData, selectedCountry, countryName, globalPast90 }) => {
    // let url
    // if (countryName) {
    //     url = `https://corona.lmao.ninja/v3/covid-19/historical/${countryName}?lastdays=90`
    // } else {
    //     url = 'https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90'
    // }
    // const { data: countryPast90, pending: pendingCountryPast90 } = useFetch(url);



    // console.log(globalData)
    // console.log(selectedCountry)
    // console.log(countryName)
    // console.log(countryPast90)
    // console.log(globalPast90)
    // console.log(globalPast90.cases)
    // console.log(Object.values(globalPast90.cases))
    // console.log(Object.keys(globalPast90.cases))
    // console.log(Object.values(globalPast90.cases))
    // console.log(countryPast90)

    const data = countryName ? selectedCountry : globalData
    // console.log(data)


    const Chart = (
        <Bar 
        data={{
            labels: ['Active', 'Recoverd', 'Deaths', 'Cases'],
            datasets: [
                {
                    label: 'People',
                    data: [data.active, data.recovered, data.deaths, data.cases],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                    }
            ]
        }} 
        options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${data.country ? data.country : 'Global'}` },
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
    )

    return(
        <div className="BarChart text-center">
            <div className="container">
               {Chart}
            </div>
        </div>
    )
}

export default BarChart