import CountUp from 'react-countup'
const Cards = ({globalData, selectedCountry, countryName}) => {

    const data = countryName ? selectedCountry : globalData
    // console.log(data)

    const date = new Date().toLocaleDateString()

    return(
        <div className='card'>
            <div className="container">
                <div className="card__flex">
                    <div className="card__box">
                        <div className="card__item yellow">
                            <div className="card__category">Active</div>
                            <h3 className="card__number"><CountUp start={0} end={data.active} duration={2} separator=","/></h3>
                            <p className="card__today">Critical: <CountUp start={0} end={data.critical} duration={2} separator=","/></p>
                            <p className="card__today">Tests: <CountUp start={0} end={data.tests} duration={2} separator=","/></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item green">
                            <div className="card__category">Recovered</div>
                            <h3 className="card__number"><CountUp start={0} end={data.recovered} duration={2} separator=","/></h3>
                            <p className="card__today">Today: +<CountUp start={0} end={data.todayRecovered} duration={2} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item black">
                            <div className="card__category">Deaths</div>
                            <h3 className="card__number"><CountUp start={0} end={data.deaths} duration={2} separator=","/></h3>
                            <p className="card__today">Today: +<CountUp start={0} end={data.todayDeaths} duration={2} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item red">
                            <div className="card__category">Cases</div>
                            <h3 className="card__number"><CountUp start={0} end={data.cases} duration={2} separator=","/></h3>
                            <p className="card__today">Today: <CountUp start={0} end={data.todayCases} duration={2} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards