import styled from 'styled-components';
import  { useEffect } from 'react';
import $ from 'jquery';
import React from 'react';
import AnimatedCounter from './AnimatedCount';

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
const SecondContent = styled.div `
color: var(--var-color-white);
font-weight: bold;
font-family: 'Poppins', sans-serif;
font-size: calc(10px + 2.5vmin);
padding: 1vh 2%;
margin-top: 3vh;

`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vh;
`
const Item = styled.div  `
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 6px;
    align-items: center;
`
const ReasonContent = styled.h2 `
    color: var(--var-color-white);
    font-weight: bold;
    margin-top: 1vh;
    font-size: calc(10px + 1.5vmin);
    text-align: left;
    font-family: 'Plus Jakarta Sans', sans-serif;

    @media only screen and (max-width: 700px) {
    font-size: calc(10px + 3vmin);
    }
`
const CountContent = styled.h1 `
color: var(--var-color-white);
padding: 6px 0;
margin-top: 0.4vh;
font-weight: bold;
font-family: 'Plus Jakarta Sans', sans-serif;
font-size: calc(10px + 7vmin);
border-bottom: 12px solid var(--var-color-advanced);

@media only screen and (max-width: 700px) {
font-size: calc(10px + 11vmin);
}
span {
    margin-top: -5px;
}
`

export default function Invest() {

    useEffect(() => {
        let a = 0;
      
        function onScroll() {
          const counterOffset = $('#counter').offset();
          if (!counterOffset) return;
      
          const oTop = counterOffset.top - window.innerHeight;
      
          if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
              const $this = $(this);
              const countTo = parseInt($this.attr('data-count'), 10);
                
              $({ countNum: parseInt($this.text(), 10) }).animate(
                { countNum: countTo },
                {
                  duration: 2000,
                  easing: 'swing',
                  step: function () {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                    $this.text(this.countNum);
                  },
                }
              );
            });
            a = 1;
          }
        }
      
        $(window).on('scroll', onScroll);
      
        // Cleanup function to remove the scroll event listener when the component is unmounted
        return () => {
          $(window).off('scroll', onScroll);
        };
      }, []); 

      React.useEffect(() => {
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
            <FirstContent className='fade'>Invest in your future with our <span>digital services</span></FirstContent>
            <SecondContent  className='fade'>Expand and engage your user base. Streamline your customer experience. Working with us is not a cost. It’s an investement. </SecondContent>
            <Container id='counter'>
            <Item>
                <CountContent className="counter-value first-child_1" data-count="400">0</CountContent>
                <ReasonContent>Invested</ReasonContent>
            </Item>
            <Item>
                <CountContent className="counter-value first-child_2" data-count="978">0</CountContent>
                <ReasonContent>Profit</ReasonContent>
            </Item>
            <Item>
                <CountContent  className="counter-value first-child_3" data-count="100">0</CountContent>
                <ReasonContent>Success</ReasonContent>
            </Item>
            <Item>
                <CountContent className="counter-value first-child_4" data-count="98.9"></CountContent>
                <ReasonContent>Rising</ReasonContent>
            </Item>
            </Container>
        </Section>
    )
}