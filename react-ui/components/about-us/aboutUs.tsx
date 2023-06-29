import React from 'react'
import {Christina, Camila, Dez, Hodan, Matt, Jordan, John, Maggie, Luis } from './profiles/index'
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