import React, { useState } from 'react';
import LinkedinIcon from '../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../public/icons/gitHub_icon.png';
import PortfolioIcon from '../../../public/icons/portfolio_icon_01.png';
import LuisPic from "../../../public/img/luis_Martinez_01.png";
import styled from 'styled-components';

const Luis = (): JSX.Element => {

    const [readMore, setReadMore] = useState(false);
    
    const text = "Hello, I'm Luis, however I prefer to go by Henry. I'm a passionate software developer seeking my first professional opportunity. With a strong foundation in computer science and proficiency in languages like Java, Html, CSS, React, and PSQL , I'm ready to contribute to an innovative team. I have practical experience working on projects, both individually and collaboratively, which sharpened my problem-solving abilities and attention to detail. Continuously learning and staying updated on industry trends, I'm eager to explore new technologies and frameworks to enhance my skills. I thrive in collaborative environments, valuing effective communication and teamwork. I bring an analytical mindset, creativity, and efficiency to problem-solving. I'm excited to join a company that shares my passion for creating innovative software solutions. As a dedicated and growth-oriented developer, I'm ready to contribute and learn in a positive work culture."

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'


    return (
        <Container>
            <AboutDiv>
                <AboutImg src={LuisPic} alt="Luis Martinez's Profile Pic" />
                <AboutName> Luis Martinez </AboutName>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/Henryesc" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href=" https://www.linkedin.com/in/luis-martinez-3a5b41276/" target="_blank"> <IconImg src={LinkedinIcon} alt="LinkedIn Icon Link" /> </a>
                <a href="#" > <IconImg src={PortfolioIcon} alt="Portfolio Icon Link" /> </a>
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
const AboutName = styled.h2`
    margin-top: 35x;
    color: #fbed55;
    margin: 10px
`
const AboutImg = styled.img`
    width: 120px;
    border-radius: 50%;
    margin-bottom: -10px
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
    padding-top: 0;
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

export default Luis;
