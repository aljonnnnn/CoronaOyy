import AboutAboutImg from '../../img/AboutAboutImg.png'
import virusIcon1 from '../../img/virus-about-img-1.svg'
import virusIcon2 from '../../img/virus-about-img-2.svg'
import virusIcon3 from '../../img/virus-about-img-3.svg'
import virusIcon4 from '../../img/virus-about-img-4.svg'
import virusIcon5 from '../../img/virus-about-img-5.svg'
import { motion } from 'framer-motion'


const AboutAbout = () => {
    return (
        <section className="AboutAbout" id='About'>
            <div className="container">
                <div className="AboutAbout__flex">
                    <div className="AboutAbout__box">
                        <div className="AboutAbout__item">
                            <h2 className="AboutAbout__heading-title">About COVID-19</h2>
                            <p className="AboutAbout__paragraph">COVID-19 is the infection disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuwan, China, in December 2019.</p>
                            <p className="AboutAbout__paragraph">Coronaviruses are a large family of viruses which ay cause illness in animals or humans, In humans, several coronaviruses are known to cause respiratory infections ranging. In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Midde East Respiratory Syndrome (MERS) and Servere Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19</p>
                        </div>
                    </div>
                    <div className="AboutAbout__box">
                        <div className="AboutAbout__item text-center">
                            <motion.img src={AboutAboutImg} alt=""/>
                            <motion.img 
                                initial={{ opacity: 0 , x: 100, rotate: -45}}
                                animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: -50,
                                    right: 0,
                                    bottom: 50,
                                }}
                                whileTap={{ scale: 0.9 }} 
                                whileHover={{ scale: 1.5, rotate: 45 }} 
                                className="AboutAbout__virusIcon-1" src={virusIcon1} alt=""/>
                            <motion.img 
                                initial={{ opacity: 0 , x: -200, rotate: -45}}
                                animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: -100,
                                    right: 0,
                                    bottom: 0,
                                }}
                                whileTap={{ scale: 0.9 }} 
                                whileHover={{ scale: 1.5, rotate: 45 }} 
                                className="AboutAbout__virusIcon-2" src={virusIcon2} alt=""/>

                            <motion.img
                                initial={{ opacity: 0 , x: 100, rotate: -45}}
                                animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                whileTap={{ scale: 0.7 }} 
                                whileHover={{ scale: 1.5, rotate: -45 }} 
                                className="AboutAbout__virusIcon-3" src={virusIcon3} alt=""/>

                            <motion.img
                                initial={{ opacity: 0 , x: 200, rotate: -45}}
                                animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                whileTap={{ scale: 0.9 }} 
                                whileHover={{ scale: 1.5, rotate: 90 }} 
                                className="AboutAbout__virusIcon-4" src={virusIcon4} alt=""/>

                            <motion.img
                                initial={{ opacity: 0 , y: -100, rotate: -45}}
                                animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 100,
                                    bottom: 0,
                                }}
                                whileTap={{ scale: 0.9 }} 
                                whileHover={{ scale: 1.5, rotate: 45 }} 
                                className="AboutAbout__virusIcon-5" src={virusIcon5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAbout;