import virusIcon1 from '../../../../assets/img/virus-hero-img-1.svg'
import virusIcon2 from '../../../../assets/img/virus-hero-img-2.svg'
import virusIcon3 from '../../../../assets/img/virus-hero-img-3.svg'
import virusIcon4 from '../../../../assets/img/virus-hero-img-4.svg'
import virusIcon5 from '../../../../assets/img/virus-hero-img-5.svg'
import { motion } from 'framer-motion'

const AboutHero = () => {
    return (
        <section className='AboutHero'>
            <div className="container">
                <div className="AboutHero__flex">
                    <div className="AboutHero__box">
                        <div className="AboutHero__item">
                            <span className='AboutHero__sub-title'>Covid-19 Alert</span>
                            <h1 className='AboutHero__title'>Stay Safe, Stay Home</h1>
                            <p className="AboutHero__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh maecenas ut ipsum est nisl elit gravida. Non est dictum egestas tincidunt suspendisse nulla. Mauris vel nullam proin ornare in donec curabitur. Nunc nulla in euismod tellus senectus sem.</p>
                            <a href="#about" className='AboutHero__btn'>More Info</a>
                        </div>
                    </div>
                    <div className="AboutHero__box">
                        <div className="AboutHero__item text-center">
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
                                className="AboutHero__virusICon-1" src={virusIcon1} alt=""/>
                                
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
                                whileHover={{ scale: 1.1, rotate: 95 }} 
                                className="AboutHero__virusICon-2" src={virusIcon2} alt=""/>

                            <motion.img 
                                initial={{ opacity: 0 , x: 100, rotate: -45, scale: 0}}
                                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1, transition: { duration: 1}}}
                                drag 
                                dragConstraints={{
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                whileTap={{ scale: 1.1 }} 
                                whileHover={{ scale: 0.9, rotate: -45 }}
                                className="AboutHero__virusICon-3" src={virusIcon3} alt=""/>

                            <motion.img 
                                initial={{ opacity: 0 , y: 100, rotate: -45}}
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
                                className="AboutHero__virusICon-4" src={virusIcon4} alt=""/>
                        </div>
                    </div>
                </div>

                <motion.img 
                    initial={{ opacity: 0 , y: 100, rotate: -45}}
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
                    className="AboutHero__virusICon-5" src={virusIcon5} alt=""/>
            </div>
        </section>
    )
}

export default AboutHero;