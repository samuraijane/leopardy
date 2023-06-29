import React from 'react';
import LinkedinIcon01 from '../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../public/icons/gitHub_icon.png'
import DezPic from '../../public/img/dez_Bryan.png'
import styled from 'styled-components';

const Dez = (): JSX.Element => {

    return (
        <Container>
         <AboutDiv>
            <AboutImg src={DezPic} alt="Dez's Profile Pic" />
            <AboutName> Dez Bryan </AboutName>
            <AboutTitle> TA </AboutTitle>
            <AboutP> I am a full-stack developer based out of Atlanta, GA. After graduating with my Bachelor of Arts from Oglethorpe University, I obtained my certification in full-stack web development at DigitalCrafts...</AboutP>
         </AboutDiv>
         <AboutIcons>
            <a href="https://github.com/DezSays" > <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
            <a href="https://www.linkedin.com/in/dezarea-bryan/" > <IconImg src={LinkedinIcon01} alt="LinkedIn Icon Link" /> </a>
         </AboutIcons>
        </Container>
    )
};

const Container = styled.div`
    width: 350px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #1e7faf;
    border-radius: 10px;
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AboutImg = styled.img`
    width: 120px;
    border-radius: 50%;
    margin-bottom: -10px
`
const AboutName = styled.h2`
    margin-top: 40x;
    color: #fff;
    margin: 10px
    margin-bottom: 0;
`
const AboutTitle = styled.p`
    color: #fff;
    margin: 0px;
`
const AboutP = styled.p`
    padding: 20px;
    line-height: 1.5rem;
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 8px;
    color: #fff;
`
const AboutIcons = styled.a`
    display: flex;
    gap: 10px;
    justify-content: center;
`

const IconImg = styled.img`
    width: 40px;
`

export default Dez;

