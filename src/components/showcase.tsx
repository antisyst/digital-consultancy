import { styled } from "styled-components";
import 'animate.css';
const Section = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    height: 100vh;
    padding-left: 9%;
    padding-right: 9%;
    padding-top: 6vh;
    background: var(--var-color-black);
    margin-bottom: 7vh;

`

const ContentCaption = styled.h1 `
    font-weigt: bold;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: calc(10px + 6.5vmin);
    color: var(--var-color-white);
    text-align: center;
    margin: 1vh 0;
    z-index: 100;

    span {
       color: var(--var-color-advanced)
    }
    b {
        filter: drop-shadow(0 0 0.75rem var(--var-color-advanced));
    }
    @media only screen and (max-width: 700px) {
    font-size: calc(10px + 7.3vmin);
    }
`
const SecondContent = styled.p `
font-weigt: bold;
font-family: 'Poppins', sans-serif;
font-size: calc(10px + 1.3vmin);
color: var(--var-color-peak);
text-align: center;
z-index: 100;
padding: 10px 4%;

@media only screen and (max-width: 700px) {
    font-weight: bold;
font-size: calc(10px + 1.6vmin);
}
`
const ShowButtons = styled.a `
    background: var(--var-color-advanced);
    color: var(--var-color-white);
    text-decoration: none;
    display: inline-block;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: bold;
    font-size: calc(10px + 1.2vmin);
    border-radius: 7px;
    border: 1.5px solid var(--var-color-advanced);
    padding: 16px 37px;
    transition: all 0.3s ease-out;

    &:hover {
        filter: drop-shadow(0 0 0.75rem var(--var-color-advanced));
    }
`
const PrimButton = styled.a `
    background: none;
    display: inline-block;
    color: var(--var-color-white);
    text-decoration: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: bold;
    font-size: calc(10px + 1.2vmin);
    border-radius: 7px;
    border: 1.5px solid var(--var-color-white);
    padding: 16px 31px;
    transition: all 0.3s ease-out;

    &:hover {
        background: var(--var-color-white);
        color: var(--var-color-black);
        filter: drop-shadow(0 0 0.75rem var(--var-color-white));
    }
`
const ButtonDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
    margin-top: 2vh;

    a {
        margin: 4px 5px;
    transition: all 0.4s ease-out;
    }
`
const ShowLine = styled.div `
    width: 2.5px;
    position: absolute;
    bottom: 0px;
    left: auto;
    right: 80px;
    height: 100vh;
    animation: lineAnim 6s ease-out 0s infinite normal forwards;
    background: var(--var-color-white);
    z-index: 10;

    @keyframes lineAnim {
        0%,
        50%,
        100% {
            background: var(--var-color-white);
        }
    
        25%,
        75% {
            background: var(--var-color-advanced);
        }
    }
    &::after {
        opacity: 0;
        width: 40px;
    }
`
const ShowLineItem = styled.div `
display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`
const RightShowLine = styled.div `
width: 2.5px;
position: absolute;
bottom: 0px;
background: var(--var-color-white);
left: 80px;
animation: lineAnim 6s ease-out 0s infinite normal forwards;
right: auto;
z-index: 10;
height: 100vh;

@keyframes lineAnim {
    0%,
    50%,
    100% {
        background: var(--var-color-white);
    }

    25%,
    75% {
        background: var(--var-color-advanced);
    }
}

`
const RightShowItem = styled.div `
display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
`
export default function Showcase() {
    return(
       <Section>
        <ShowLine>
            <ShowLineItem/>
        </ShowLine>
        <RightShowLine>
            <RightShowItem/>
        </RightShowLine>
               <ContentCaption className="animate__animated animate__fadeIn">Transform your <span>digital presence</span> with our <b className="animate__animated animate__fadeIn">innovative solutions</b><span>.</span></ContentCaption>
               <SecondContent className="animate__animated animate__fadeIn">We work closely with you to understand your requirements and develop customized solutions that help you achieve your business goals. We offer great software development services through entire life cycle of the product. </SecondContent>
               <ButtonDiv>
               <PrimButton href=""className="animate__animated animate__fadeIn">Explore Now</PrimButton>
               <ShowButtons href="" className="animate__animated animate__fadeIn">Learn More</ShowButtons>
               </ButtonDiv>
       </Section> 
    )
}