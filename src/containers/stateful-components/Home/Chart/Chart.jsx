import { Bar } from 'react-chartjs-2'

const Chart = ({ globalData, selectedCountry, countryName }) => {

    // console.log(globalData)
    // console.log(selectedCountry)
    // console.log(countryName)

    const data = countryName ? selectedCountry : globalData
    // console.log(data)

    return(
        <div className="chart text-center">
            <div className="container">
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
            </div>
        </div>
    )
}

export default Chart