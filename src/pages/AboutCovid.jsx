import AboutAbout from "../containers/stateless-components/About/About/AboutAbout"
import AboutAccordion from "../containers/stateless-components/About/Accordion/AboutAccordion"
import AboutHero from "../containers/stateless-components/About/Hero/AboutHero"
import AboutSymtoms from "../containers/stateless-components/About/Symptoms/AboutSymptoms"
import AboutYoutube from "../containers/stateless-components/About/Youtube/AboutYoutube"

const AboutCovid = () => {
    return (
        <>
            <AboutHero />
            <AboutAbout />
            <AboutSymtoms />
            <AboutYoutube />
            <AboutAccordion />
            
        </>
    )
}

export default AboutCovid