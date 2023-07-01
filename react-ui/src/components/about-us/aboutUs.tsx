import React from 'react'
import styled from 'styled-components'
import Team from '../../components/about-us/profiles/index'

const AboutUs = (): JSX.Element => {

    return (
        <Container>
        <TitleText>
            <h1>Our Team</h1>
            <p>This is a subheading about the project</p>
         </TitleText>
         <Profiles>
            <Team />
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