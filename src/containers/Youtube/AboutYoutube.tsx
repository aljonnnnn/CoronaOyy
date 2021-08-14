import virusIcon1 from '../../assets/img/virus-youtube-img-1.svg';
import virusIcon2 from '../../assets/img/virus-youtube-img-2.svg';
import virusIcon3 from '../../assets/img/virus-youtube-img-3.svg';
import virusIcon4 from '../../assets/img/virus-youtube-img-4.svg';
import { motion } from 'framer-motion';

const AboutYoutube = () => {
  return (
    <div className="AboutYoutube">
      <div className="AboutYoutube__container">
        <h1 className="AboutYoutube__heading-title">
          Youtube video about Covid-19
        </h1>
        <iframe
          className="AboutYoutube__video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tNi2DbMO0xo"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <motion.img
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="AboutYoutube__virusICon-1"
          src={virusIcon1}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="AboutYoutube__virusICon-2"
          src={virusIcon2}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 100, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="AboutYoutube__virusICon-3"
          src={virusIcon3}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 100, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: 0, transition: { duration: 1 } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.5, rotate: 45 }}
          className="AboutYoutube__virusICon-4"
          src={virusIcon4}
          alt=""
        />
      </div>
    </div>
  );
};
export default AboutYoutube;
