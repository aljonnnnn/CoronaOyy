
const Cards = () => {
    return(
        <div className='card'>
            <div className="container">
                <div className="card__flex">
                    <div className="card__box">
                        <div className="card__item yellow">
                            <div className="card__category">Active</div>
                            <h3 className="card__number">904,245</h3>
                            <p className="card__today">Critical: <span>000</span></p>
                            <p className="card__today">Tests: <span>10,977,922</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item green">
                            <div className="card__category">Recovered</div>
                            <h3 className="card__number">705,107</h3>
                            <p className="card__today">Today: +<span>000</span></p>
                            <p className="card__date"><span>04/16/2021</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item black">
                            <div className="card__category">Deaths</div>
                            <h3 className="card__number">17,912,538</h3>
                            <p className="card__today">Today: +<span>000</span></p>
                            <p className="card__date"><span>04/16/2021</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item red">
                            <div className="card__category">Infected</div>
                            <h3 className="card__number">904,245</h3>
                            <p className="card__today">Today: <span>000</span></p>
                            <p className="card__date"><span>04/16/2021</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards