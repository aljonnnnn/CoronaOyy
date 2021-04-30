import icon1 from '../../../../assets/img/fever.svg'
import icon2 from '../../../../assets/img/cough.svg'
import icon3 from '../../../../assets/img/breathing.svg'
import icon4 from '../../../../assets/img/chest-pain.svg'
import icon5 from '../../../../assets/img/difficulty-breathing.svg'
import icon6 from '../../../../assets/img/fatigue.svg'
import virusIcon1 from '../../../../assets/img/virus-symptoms-img-1.svg'
import virusIcon2 from '../../../../assets/img/virus-symptoms-img-2.svg'
import virusIcon3 from '../../../../assets/img/virus-symptoms-img-3.svg'
import virusIcon4 from '../../../../assets/img/virus-symptoms-img-4.svg'
import { motion } from 'framer-motion'


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
                            <span className="AboutSymptoms__title" >Cough</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon3} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Shortness of Breath</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon4} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Chest Pain</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon5} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Difficult Breathing</span>
                        </div>
                    </div>
                    <div className="AboutSymptoms__box">
                        <div className="AboutSymptom__item">
                            <img  className="AboutSymptoms__img" src={icon6} alt="Fever"/>
                            <span className="AboutSymptoms__title" >Fatigue</span>
                        </div>
                    </div>
                </div>
                <motion.img
                    initial={{ opacity: 0 , x: -100, rotate: -45}}
                    animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1}}}
                    drag 
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.5, rotate: 45 }} 
                    className="AboutSymptoms__virusICon-1" src={virusIcon1} alt=""/>
                <motion.img
                    initial={{ opacity: 0 , y: -100, rotate: -45}}
                    animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 1}}}
                    drag 
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.5, rotate: 45 }} 
                    className="AboutSymptoms__virusICon-2" src={virusIcon2} alt=""/>
                <motion.img
                    initial={{ opacity: 0 , y: -100, rotate: -45}}
                    animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 1}}}
                    drag 
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.5, rotate: 45 }} 
                    className="AboutSymptoms__virusICon-3" src={virusIcon3} alt=""/>
                <motion.img
                    initial={{ opacity: 0 , y: -100, rotate: -45}}
                    animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 1}}}
                    drag 
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                    whileTap={{ scale: 0.9 }} 
                    whileHover={{ scale: 1.5, rotate: 45 }} 
                    className="AboutSymptoms__virusICon-4" src={virusIcon4} alt=""/>
            </div>
        </section>
    )
}

export default AboutSymtoms
