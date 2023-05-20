import styled from 'styled-components';
import { SiIkea, SiKfc, SiNubank, SiOsano, SiBurgerking, SiWizzair, SiDaf, SiAmg, SiAnsible, SiAudible, SiBlender, SiDrooble, SiIntermarche, SiMarriott, SiMediamarkt, SiTesco, SiSentry } from 'react-icons/si';
import { TbBrandNordVpn } from 'react-icons/tb';
import { SlSocialStumbleupon } from 'react-icons/sl';
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
const Container = styled.div  `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 4%;
    margin-top: 7vh;
`
const ContItem = styled.div `
    width: 190px;
    margin: 20px;
    height: 180px;

    svg {
        color: var(--var-color-white);
        font-size: 106px;
        transition: all 0.3s ease-out;

        &:hover {
            color: var(--var-color-advanced);
            transition: all 0.3s ease-out;
        }
    }

`
export default function Transform() {


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
            <FirstContent className='fade'>Inspire your audience with our <span>digital products</span></FirstContent>
            <Container>
                <ContItem className='fade'>
                    <SiIkea/>
                </ContItem>
                <ContItem className='fade'>
                    <SiKfc/>
                </ContItem>
                <ContItem className='fade'>
                    <SiNubank/>
                </ContItem>
                <ContItem className='fade'>
                    <SiOsano/>
                </ContItem>
                <ContItem className='fade'>
                    <SiBurgerking/>
                </ContItem>
                <ContItem className='fade'>
                    <SiWizzair/>
                </ContItem>
                <ContItem className='fade'>
                    <SiAmg/>
                </ContItem>
                <ContItem className='fade'>
                    <SiDaf/>
                </ContItem>
                <ContItem className='fade'>
                    <TbBrandNordVpn/>
                </ContItem>
                <ContItem className='fade'>
                    <SlSocialStumbleupon/>
                </ContItem>
                <ContItem className='fade'>
                    <SiAnsible/>
                </ContItem>
                <ContItem className='fade'>
                    <SiAudible/>
                </ContItem>
                <ContItem className='fade'>
                    <SiBlender/>
                </ContItem>
                <ContItem className='fade'>
                    <SiDrooble/>
                </ContItem>
                <ContItem className='fade'>
                    <SiBlender/>
                </ContItem>
                <ContItem className='fade'>
                    <SiIntermarche/>
                </ContItem>
                <ContItem className='fade'>
                    <SiMarriott/>
                </ContItem>
                <ContItem className='fade'>
                    <SiMediamarkt/>
                </ContItem>
                <ContItem className='fade'>
                    <SiTesco/>
                </ContItem>
                <ContItem className='fade'>
                    <SiSentry/>
                </ContItem>
            </Container>
        </Section>
    )
}