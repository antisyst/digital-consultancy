import styled from 'styled-components';
import DataImage from '../utils/data-anly.svg';
import DigitalImage from '../utils/digital-strategy.svg';
import WebDesingImage from '../utils/web-design.svg';
import WebDevImage from '../utils/web-development.svg';
import BrandImage from '../utils/branding.svg';
import ContentImage from '../utils/content.svg'
import ResearchImage from '../utils/research.svg'
import ProductImage from '../utils/product.svg'
import MobileDev from '../utils/mobile-dev.svg';
import { useEffect } from 'react';

const Section = styled.div `
    text-align: center;
    padding: 0 7%;
    margin-top: 20vh;
    background: var(--var-color-black);

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
const Container = styled.div   `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vh;
    padding: 5px 4%;
`
const Item = styled.div `
    width: 350px;
    height: 360px;
    margin: 10px;
    user-select: none;
    border-radius: 10px;
    display: flex;
    transition: all 0.4s ease-out;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 3.5rem var(--var-color-advanced));

    &:hover {
    filter: drop-shadow(0 0 2rem var(--var-color-advanced));
    }

    img {
        width: 200px;
        pointer-events: none;
        user-select: none;
    }
    h2 {
        color: var(--var-color-white);
    font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: bold;
        margin-top: 3vh;
        text-align: center;
        filter: drop-shadow(0 0 0.75rem rgba(0,0,0, 0));
        font-size: 30px;
    }
`
export default function Services() {

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
            <FirstContent className='fade'>Invent the future with our <span>digital innovation</span></FirstContent>
            <Container>
                <Item className='fade'>
                   <img src={ResearchImage} alt="Web Design" />
                    <h2>UX Research</h2>
                </Item>
                <Item className='fade'>
                    <img src={WebDesingImage} alt="Web Design" />
                    <h2>UI/UX Design</h2>
                </Item>
                <Item className='fade'>
                    <img src={WebDevImage} alt="Web Development" />
                    <h2>Web Development</h2>
                </Item>
                <Item className='fade'>
                    <img src={DataImage} alt="Data Analytics" />
                    <h2>Data Analytics</h2>
                </Item>
                <Item className='fade'>
                    <img src={DigitalImage} alt="Digital Strategy" />
                    <h2>Digital Strategy</h2>
                </Item>
                <Item className='fade'>
                    <img src={BrandImage} alt="Branding" />
                    <h2>Branding</h2>
                </Item>
                <Item className='fade'>
                    <img src={MobileDev} alt="Branding" />
                    <h2>Mobile Development</h2>
                </Item>
                <Item className='fade'> 
                    <img src={ContentImage} alt="Branding" />
                    <h2>Content Creation</h2>
                </Item>
                <Item className='fade'>
                    <img src={ProductImage} alt="Branding" />
                    <h2>Product Managament</h2>
                </Item>
            </Container>
        </Section>
    )
}