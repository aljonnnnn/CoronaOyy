import { useState} from 'react'

const data = [
    {
        question: 'What is ventilation and how can it prevent COVID-19 from spreading?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nam enim, enim dui mollis risus. Duis orci ipsum condimentum dui pharetra. Id pellentesque odio dolor, malesuada. Blandit proin neque, imperdiet nec. Volutpat quis bibendum dignissim a aliquet gravida id. Urna tortor placerat diam, nascetur id amet, elit, ultricies. Facilisis nam sed nulla dui. Proin mattis fames ipsum ornare sit malesuada. Accumsan, dolor condimentum ultricies sed adipiscing ac nisi tristique vitae. Phasellus porttitor maecenas quis lacus, mi, etiam. Tristique proin fames sem nunc, lectus sapien.'
    },
    {
        question: 'What is ventilation and how can it prevent COVID-19 from spreading?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nam enim, enim dui mollis risus. Duis orci ipsum condimentum dui pharetra. Id pellentesque odio dolor, malesuada. Blandit proin neque, imperdiet nec. Volutpat quis bibendum dignissim a aliquet gravida id. Urna tortor placerat diam, nascetur id amet, elit, ultricies. Facilisis nam sed nulla dui. Proin mattis fames ipsum ornare sit malesuada.'
    },
    {
        question: 'What is ventilation and how can it prevent COVID-19 from spreading?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nam enim, enim dui mollis risus. Duis orci ipsum condimentum dui pharetra. Id pellentesque odio dolor, malesuada. Blandit proin neque, imperdiet nec. Volutpat quis bibendum dignissim a aliquet gravida id. Urna tortor placerat diam, nascetur id amet, elit, ultricies. Facilisis nam sed nulla dui. Proin mattis fames ipsum ornare sit malesuada.'
    },
    {
        question: 'What is ventilation and how can it prevent COVID-19 from spreading?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nam enim, enim dui mollis risus. Duis orci ipsum condimentum dui pharetra. Id pellentesque odio dolor, malesuada. Blandit proin neque, imperdiet nec. Volutpat quis bibendum dignissim a aliquet gravida id. Urna tortor placerat diam, nascetur id amet, elit, ultricies. Facilisis nam sed nulla dui. Proin mattis fames ipsum ornare sit malesuada.'
    },
]

const down = <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.11942L8.95692 10.0763L17.9138 1.11942L16.7944 0L8.95692 7.8375L1.11942 0L0 1.11942Z" fill="#111111"/>
            </svg>

const up = <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.88906L9 0L18 8.88906L16.8752 10L9 2.22187L1.1248 10L0 8.88906Z" fill="white"/>
            </svg>


const AboutAccordion = () => {
    const [selected, setSelected] = useState(null)

    const accordionToggler = (index) => {
        if (selected === index) {
            return setSelected(null)
        }

        setSelected(index)
    }

    return (
        <section className="AboutAccordion">
            <h1 className="AboutAccordion__heading-title">Common question in google about COVID-19</h1>
            <div className="AboutAccordion__container" >
                {data.map((item, index) => {
                    return (
                        <div className="AboutAccordion__accordion" key={index}>
                            <div className={`AboutAccordion__accordion-head ${selected === index ? 'active' : ''}`} onClick={() => accordionToggler(index)}>
                                <h3 className={`AboutAccordion__accordion-question ${selected === index ? 'active' : ''}`}>{item.question}</h3>
                                {selected === index ? up : down}

                            </div>
                            <div className={`AboutAccordion__accordion-body ${selected === index ? 'active' : ''}`}>
                                <p className={`AboutAccordion__accordion-answer ${selected === index ? 'active' : ''}`}>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AboutAccordion