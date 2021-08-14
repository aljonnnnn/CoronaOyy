import * as React from 'react';

const data = [
  {
    question:
      'Why is the disease being called coronavirus disease 2019, COVID-19?',
    answer:
      'On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, “CO” stands for corona, “VI” for virus, and ”D” for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV.”',
  },
  {
    question: 'How does the virus spread?',
    answer:
      'COVID-19 spreads very easily from person to person. How easily a virus spreads from person to person can vary. The virus that causes COVID-19 appears to spread more efficiently than influenza but not as efficiently as measles, which is among the most contagious viruses known to affect people.',
  },
  {
    question: 'Am I at risk for COVID-19 from mail, packages, or products?',
    answer:
      'Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products, or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.',
  },
  {
    question: 'How long have coronaviruses existed?',
    answer:
      'The most recent common ancestor (MRCA) of all coronaviruses is estimated to have existed as recently as 8000 BCE, although some models place the common ancestor as far back as 55 million years or more, implying long term coevolution with bat and avian species.',
  },
  {
    question: 'Who is most at risk for COVID-19?',
    answer:
      'COVID-19 is often more severe in people 60+yrs or with health conditions like lung or heart disease, diabetes or conditions that affect their immune system.​',
  },
  {
    question: 'What are foods to avoid during the COVID-19 pandemic?',
    answer:
      'Reduce foods such as red and fatty meats, butter and full-fat dairy products, palm oil, coconut oil, solid shortening and lard. Avoid trans fats as much as possible. Read nutrition labels to ensure that partially hydrogenated oils are not listed in the ingredients.',
  },
  {
    question: 'Can you get Covid again?',
    answer:
      'Immunity is not guaranteed by past infection, and vaccinations that provide additional protection are still needed for those who have had COVID-19.',
  },
  {
    question: 'Is coronavirus disease fatal?',
    answer:
      'COVID-19 could be fatal, but this happens rarely. According to WHO, 82% of infected patients will have mild presentations, 15% will have severe manifestations, and only 3% will be critical. As mentioned before, older people, people with compromised immune systems, and people with pre-existing medical conditions, such as diabetes and heart disease, are more prone to fall severely ill with the virus. Around 2% of people infected with the disease have died.',
  },
  {
    question: 'What are the mild symptoms of COVID-19?',
    answer:
      'The severity of COVID-19 varies. The disease may take a mild course with few or no symptoms, resembling other common upper respiratory diseases such as the common cold.',
  },
  {
    question:
      'Can the coronavirus disease be transmitted in hot or humid climates?',
    answer:
      'From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.',
  },
  {
    question: 'What are the best foods to eat during the COVID-19 pandemic?',
    answer:
      'Promote diets which are based on a variety of unprocessed or minimally processed foods, include wholegrains, legumes, nuts and an abundance and variety of fruits and vegetables and which can include moderate amounts of eggs, dairy, poultry and fish, and small amounts of red meat.',
  },
  {
    question: 'When do you lose taste and smell with Covid?',
    answer:
      'The loss of the senses of taste and smell can sometimes be the only symptom that COVID-19 causes. The symptoms are usually temporary, and taste and smell should significantly improve or return within 4 weeks. However, in some cases, this may take up to 6 months.',
  },
  {
    question: 'What are the best foods to eat during the COVID-19 pandemic?',
    answer:
      'Promote diets which are based on a variety of unprocessed or minimally processed foods, include wholegrains, legumes, nuts and an abundance and variety of fruits and vegetables and which can include moderate amounts of eggs, dairy, poultry and fish, and small amounts of red meat.',
  },
  {
    question: 'When was COVID-19 first reported?',
    answer:
      'On this website you can find information and guidance from WHO regarding the current outbreak of coronavirus disease (COVID-19) that was first reported from Wuhan, China, on 31 December 2019.',
  },
];

const down = (
  <svg
    className="AboutAccordion__icon"
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1.11942L8.95692 10.0763L17.9138 1.11942L16.7944 0L8.95692 7.8375L1.11942 0L0 1.11942Z"
      fill="#111111"
    />
  </svg>
);

const up = (
  <svg
    className="AboutAccordion__icon"
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 8.88906L9 0L18 8.88906L16.8752 10L9 2.22187L1.1248 10L0 8.88906Z"
      fill="white"
    />
  </svg>
);

const AboutAccordion = () => {
  const [selected, setSelected] = React.useState(null);

  const accordionToggler = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <section className="AboutAccordion">
      <h1 className="AboutAccordion__heading-title">
        Common question in google about COVID-19
      </h1>
      <div className="AboutAccordion__container">
        {data.map((item, index) => {
          return (
            <div className="AboutAccordion__accordion" key={index}>
              <div
                className={`AboutAccordion__accordion-head ${
                  selected === index ? 'active' : ''
                }`}
                onClick={() => accordionToggler(index)}
              >
                <h3
                  className={`AboutAccordion__accordion-question ${
                    selected === index ? 'active' : ''
                  }`}
                >
                  {item.question}
                </h3>
                {selected === index ? up : down}
              </div>
              <div
                className={`AboutAccordion__accordion-body ${
                  selected === index ? 'active' : ''
                }`}
              >
                <p
                  className={`AboutAccordion__accordion-answer ${
                    selected === index ? 'active' : ''
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutAccordion;
