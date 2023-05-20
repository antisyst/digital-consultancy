import styled from 'styled-components';

const Section = styled.div `
    text-align: center;
    padding: 30px 7%;
    border-top: 2px solid var(--var-color-white);
    margin-top: 20vh;
    background: var(--var-color-black);
`

const CreatorContent = styled.h2 `
    color: var(--var-color-white);
    font-weight: bold;
    font-family: 'Plus Jakarta Sans', sans-serif;
    text-align: center;
    margin: 4px 0;

    a {
    color: var(--var-color-advanced);
    }
`
const Copyright = styled.h3 `
color: var(--var-color-white);
font-weight: bold;
margin: 10px 0;
font-family: 'Plus Jakarta Sans', sans-serif;
`

export default function Footer() {
    return(
        <Section>
            <CreatorContent>Developed & designed by <a href="https://rmzn.netlify.app" target='_blank'>Ramazan Azimli</a></CreatorContent>
            <Copyright>Copyright 2023 ©</Copyright>
        </Section>
    )
}