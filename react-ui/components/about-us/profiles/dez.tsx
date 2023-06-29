import React, { useState } from 'react';
import LinkedinIcon01 from '../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../public/icons/gitHub_icon.png'
import DezPic from '../../../public/img/dez_Bryan.png'
import styled from 'styled-components';

const Dez = (): JSX.Element => {

    const [readMore, setReadMore] = useState(false);
    
    const text = "I am a full-stack developer based out of Atlanta, GA. After graduating with my Bachelor of Arts from Oglethorpe University, I obtained my certification in full-stack web development at DigitalCrafts. Since graduating, I have been working as a TA at DigitalCrafts. As a TA, I assist in teaching the following tech stack: HTML, CSS, JavaScript, Bootstrap, Flexbox, React, Amplify, Python, Sequelize, PostgreSQL, Node.js, Express, and Redux."

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'

    return (
        <Container>
            <AboutDiv>
                <AboutImg src={DezPic} alt="Dez's Profile Pic" />
                <AboutName> Dez Bryan </AboutName>
                <AboutTitle> TA </AboutTitle>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/DezSays" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href="https://www.linkedin.com/in/dezarea-bryan/" target="_blank"> <IconImg src={LinkedinIcon01} alt="LinkedIn Icon Link" /> </a>
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
    margin-bottom: 2px;
`

const AboutName = styled.h2`
    margin-top: 40x;
    color: #fbed55;
    margin: 10px
    margin-bottom: 0;
`
const AboutTitle = styled.p`
    color: #fff;
    margin: 0px;
    font-style: italic;
`
const AboutButton = styled.button`
    border: none;
    color: #1e7faf;
    background-color: #fbed55;
    font-weight: 600;
    margin: 5px 5px;
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

