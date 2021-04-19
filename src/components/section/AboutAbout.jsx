import AboutAboutImg from '../../img/AboutAboutImg.png'

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
                            <img src={AboutAboutImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAbout;