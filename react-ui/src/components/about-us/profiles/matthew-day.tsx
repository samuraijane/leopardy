import React, { useState } from 'react';
import LinkedinIcon01 from '../../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../../public/icons/gitHub_icon.png'
import MattPic from '../../../../public/img/matthew_Day.jpg'
import styled from 'styled-components';

const Matt = (): JSX.Element => {
    const [readMore, setReadMore] = useState(false);
    
    const text = "I work very hard. I am passionate about problem-solving. I love to learn new things. "

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'

    return (
        <Container>
            <AboutDiv>
                <AboutImg src={MattPic} alt="Matt's Profile Pic" />
                <AboutName> Matthew Day </AboutName>
                <AboutTitle> Instructor </AboutTitle>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/samuraijane" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href="https://www.linkedin.com/in/daymatthew/ " target="_blank"> <IconImg src={LinkedinIcon01} alt="LinkedIn Icon Link" /> </a>
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
`
const AboutName = styled.h2`
    margin-top: 40x;
    color: #fbed55;
    margin: 10px
    margin-bottom: 2px;
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

export default Matt;

