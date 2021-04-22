import icon1 from '../../img/fever.svg'
import icon2 from '../../img/cough.svg'
import icon3 from '../../img/breathing.svg'
import icon4 from '../../img/chest-pain.svg'
import icon5 from '../../img/difficulty-breathing.svg'
import icon6 from '../../img/fatigue.svg'

const AboutSymtoms = () => {
    return (
        <section className="AboutSymptoms">
            <div className="AboutSymptoms__container">
                <h1 className="AboutSymptoms__heading-title">Coronavirus Symptoms</h1>
                <div className="AboutSymptoms__flex">
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon1} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon2} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon3} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon4} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon5} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon6} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fever</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default AboutSymtoms
