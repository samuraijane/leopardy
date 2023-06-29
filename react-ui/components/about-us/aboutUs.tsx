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
        <>
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
        </>
    )
};

const Profiles = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TitleText = styled.div `
    text-align:center;
`
export default AboutUs;