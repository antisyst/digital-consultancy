import styled from 'styled-components';
import { Collapse, Text } from "@nextui-org/react";
import { useEffect } from 'react';

const Section = styled.div `
    text-align: center;
    padding: 0 8%;
    margin-top: 20vh;
    background: var(--var-color-black);
    font-family: 'Plus Jakarta Sans', sans-serif;

    p {
        color: var(--var-color-white);
        text-align: left;
        font-size: calc(10px + 1.3vmin);
    }
    
    h3 {
        color: var(--var-color-white);
    }

    @media only screen and (max-width: 700px) {
      padding: 0 5%;
    }
`
const FirstContent = styled.div `
    color: var(--var-color-white);
    font-weight: bold;
    padding: 1vh 4%;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: calc(10px + 4vmin);

    span {
        padding-bottom: 7px;
        border-bottom: 6px solid var(--var-color-advanced);
    }
`
const Container = styled.div `
    text-align: center;
    margin-top: 5vh;
    color: var(--var-color-white);
    margin-bottom: 5vh;

    h3 {
      color: var(--var-color-white);
    }
`

export default function Questions() {

  useEffect(() => {
    function onScroll() {
      $('.fade').each(function () {
        const bottom_of_object = $(this).position().top + $(this).outerHeight();
        const bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ opacity: '1' }, 700);
        }
      });
    }

    $(window).on('scroll', onScroll);

    // Cleanup function to remove the scroll event listener when the component is unmounted
    return () => {
      $(window).off('scroll', onScroll);
    };
  }, []);

    return(
        <Section>
            <FirstContent className='fade'>Frequently asked <span>questions</span></FirstContent>
            <Container>
            <Collapse.Group>
      <Collapse title="What is digital consulting?" >
        <Text>
        Digital consulting helps you accelerate towards your business goals and take your organisation to the next level. <br />
        First and foremost, digital business consulting is about implementing successful business strategies across a variety of digital platforms and channels. <br />
        However, it also covers a wide range of sub-services involved in creating and developing digital products.
        </Text>
      </Collapse>
      <Collapse title="How are you different from other companies?"  >
        <Text>
        As a full-service digital business consulting company, the big difference is our focus on business results – not just tasks and services. <br />

        We love building long-term partnerships. We’re much less keen on one-off transactional relationships. <br />

        We work smart and get things done. Our record of 200+ projects delivered in 20+ industries, across four continents, is proof of that. <br />

        We make sure that working with us is an investment in your business’s success – not just another cost. <br />

        And we’re willing to put our money where our mouth is, by giving the option of results-based pricing.
        </Text>
      </Collapse>
      <Collapse title="What kinds of projects do you specialise in?" >
        <Text>
        We love working with digital-first businesses on high-stakes projects with demanding technical requirements.
        <br />
        And we deliver the best results when we’re onboarded as long-term strategic partners. 
        <br />
        That way we can really invest in getting to know your business, and create tailor-made solutions to your most complex digital challenges.
        </Text>
      </Collapse>
      <Collapse title="How much does it cost to work with you?" >
        <Text>
        We work on a per-hour basis – so the cost depends on how much input you need from us. As a rough guide, projects tend to range from $10,000–$200,000+.
        <br />
        For work with a clear scope and specific deliverables, we can also consider fixed project fees. Get in touch with our team of digital consultants for a free estimate.
        </Text>
      </Collapse>
      <Collapse title="What kinds of projects do you specialise in?">
        <Text>
        We love working with digital-first businesses on high-stakes projects with demanding technical requirements.
        <br />
        And we deliver the best results when we’re onboarded as long-term strategic partners. 
        <br />
        That way we can really invest in getting to know your business, and create tailor-made solutions to your most complex digital challenges.
        </Text>
      </Collapse>
      <Collapse title="Does your whole team work in house?" >
        <Text>
        Yes, all our team members, consultants, specialists, and experts work in house. 
        <br />
        We strive for the highest quality and value in everything we do – and we do it best when we work with our own people. <br />
        </Text>
      </Collapse>
      <Collapse title="Who and what are you a good fit for?"> 
        <Text>
        We’re at our best when we’re: 
        <br />
        <li>Delivering strategically important projects with a big impact on company revenue</li>
        <li>Working under high pressure due to tight timelines or complex requirements</li>
        <li>Making things work on a large scale</li>
        <li>Partnering with digital-first or digital-only companies</li>
        <li>Don’t see yourself in any of the above? Then we’re probably not the right match for you.</li> 
        <br />
        We’ll be happy to recommend you to a partner who’s more suited to your needs.
        </Text>
      </Collapse>
    </Collapse.Group>
    </Container>
        </Section>
    )
}