import styled from 'styled-components';
import { SiIkea, SiKfc, SiAmg, SiBurgerking, SiBlender, SiAudible, SiNubank, SiDaf, SiTesco } from 'react-icons/si';

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
        padding-bottom: 6px;
        border-bottom: 6px solid var(--var-color-advanced);
    }
    @media only screen and (max-width: 700px) {
        line-height: 3rem;
    }
`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 5vh;
`
const Item = styled.div `
    width: 450px;
    height: 350px;
    margin: 7px;
    border-radius: 8px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: var(--var-color-advanced) 0px 7px 29px 0px;
    padding: 20px 25px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: bold;
    justify-content: center;
    border: 1.6px solid var(--var-color-advanced);

     svg {
    color: var(--var-color-white);
text-align: left;
font-size: 190px;
margin-bottom: 1vh;

@media only screen and (max-width: 700px)  {
    font-size: 140px;
}
     }

     @media only screen and (max-width: 700px) {
        width: 100%;
        height: 370px;
     }
`
const IndCont = styled.div `
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
     text-align: left;
     margin-top: 1.5vh;
`
const IndustryContent = styled.p `
     text-align: left;
     display: inline-block;
     font-weight: bold;
     padding: 7px 15px;
     border: 1.5px solid var(--var-color-advanced);
     border-radius: 20px;
     user-select: none;
     color: var(--var-color-white);
     margin: 5px;
     transition: all 0.3s ease-out;
     font-family: 'Plus Jakarta Sans', sans-serif;

     &:hover {
        transition: all 0.3s ease-out;
        background: var(--var-color-advanced);
        color: var(--var-color-white);
     }
`
const AltContent = styled.div `
color: var(--var-color-white);
font-weight: bold;
text-align: left;
font-size: calc(10px + 1.1vmin);

@media only screen and (max-width: 700px) {
font-size: calc(10px + 1.6vmin);
}
`
export default function Clients() {
    return(
        <Section>
            <FirstContent><span>Clients</span> we've turned into long-term partners</FirstContent>
            <Container>
                <Item>
                    <SiIkea/>
                    <AltContent>Our long-term partnership with IKEA, the Swedish furniture giant, focuses on strategic digital transformation projects. We help shift their core business services from offline to online.</AltContent>
                    <IndCont>
                    <IndustryContent>Retail & FMCG</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiKfc/>
                    <AltContent>Our story with KFC goes way back. We’ve redesigned their website, mobile app, kiosks and more.  And now, as strategic digital partner, we manage their omnichannel experience and analytics.</AltContent>
                    <IndCont>
                    <IndustryContent>Food Commerce</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiAmg/>
                    <AltContent>AMG is the performance arm of Mercedes-Benz. Partnering with the team at their Stuttgart HQ, we developed a number of innovative product concepts for Mercedes-AMG car-sharing services.</AltContent>
                    <IndCont>
                    <IndustryContent>Automotive & Mobility</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiBurgerking/>
                    <AltContent>We led the design of Burger King’s in-store kiosks, having partnered successfully with other AmRest brands. Since then, we’ve also taken charge of optimising their omnichannel experience.</AltContent>
                    <IndCont>
                    <IndustryContent>Food Commerce</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiBlender/>
                    <AltContent>Our story with Blender started with a simple landing page back in 2017. Since then, as their strategic partners, we’ve created their e-commerce platform, website, and much more</AltContent>
                    <IndCont>
                    <IndustryContent>Commerce</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiAudible/>
                    <AltContent>We created state-of-the-art software for the Audible – a premium co-working space in Warsaw, in the heart of Europe.</AltContent>
                    <IndCont>
                    <IndustryContent>Software</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiNubank/>
                    <AltContent>We partnered with NuBank brand Nationale-Nederlanden to redesign their insurance sales process. We also provided concept validation through usability testing and in-depth interviews.</AltContent>
                    <IndCont>
                    <IndustryContent>Banking & Finance</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiDaf/>
                    <AltContent>Daf – one of Norway’s most innovative legal start-ups – chose us as their design partner. We created their web platform, which simplifies, automates and digitises corporate processes.</AltContent>
                    <IndCont>
                    <IndustryContent>Banking & Finance</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
                <Item>
                    <SiTesco/>
                    <AltContent>Tesco plc is a British multinational groceries and general merchandise retailer headquartered in England. In 2011 it was the third-largest retailer in the world.</AltContent>
                    <IndCont>
                    <IndustryContent>Banking & Finance</IndustryContent>
                    <IndustryContent>B2C</IndustryContent>
                    </IndCont>
                </Item>
            </Container>
        </Section>
    )
}