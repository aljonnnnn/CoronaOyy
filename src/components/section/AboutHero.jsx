import AboutHeroImg from '../../img/AboutHeroImg.svg'
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
                            <img className='AboutHero__img' src={AboutHeroImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero;