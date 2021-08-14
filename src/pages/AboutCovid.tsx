import AboutAbout from '../containers/About/AboutAbout';
import AboutAccordion from '../containers/Accordion/AboutAccordion';
import AboutHero from '../containers/Hero/AboutHero';
import AboutSymtoms from '../containers/Symptoms/AboutSymptoms';
import AboutYoutube from '../containers/Youtube/AboutYoutube';

const AboutCovid = () => {
  return (
    <>
      <AboutHero />
      <AboutAbout />
      <AboutSymtoms />
      <AboutYoutube />
      <AboutAccordion />
    </>
  );
};

export default AboutCovid;
