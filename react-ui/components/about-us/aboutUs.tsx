import React from 'react'
import Christina from "./christina-barron"
import Matt from "./matthew-day"
import Dez from "./dez"
import Jordan from "./jordan"
import Camila from "./camila"
import Hodan from "./hodan"
import John from "./john"
import Maggie from "./maggie"
import Luis from "./luis"
import styled from 'styled-components'

const AboutUs = (): JSX.Element => {

    return (
        <Container>
        <TitleText>
            <h1>Our Team</h1>
            <p>This is a subheading about the project</p>
         </TitleText>
         <Profiles>
            <Matt />
            <Dez />
            <Jordan />
            <Christina />
            <Camila />
            <Hodan />
            <John />
            <Maggie />
            <Luis />
         </Profiles>
        </Container>
    )
};

const Container = styled.div`
    @media (max-width: 1268px) {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
}
`

const Profiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TitleText = styled.div `
    text-align:center;
`
export default AboutUs;