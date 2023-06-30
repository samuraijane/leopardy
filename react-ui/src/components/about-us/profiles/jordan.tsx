import React, { useState } from 'react';
import LinkedinIcon from '../../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../../public/icons/gitHub_icon.png';
import PortfolioIcon from '../../../../public/icons/portfolio_icon_01.png';
import JordanPic from '../../../../public/img/jordan_Couch.jpg';
import styled from 'styled-components';

const Jordan = (): JSX.Element => {

    const [readMore, setReadMore] = useState(false);
    
    const text = "Hey! I’m Jordan Couch. I'm thrilled to share a bit about myself as a front-end developer. I had the amazing opportunity to attend the highly acclaimed DigitalCrafts web development bootcamp, where I immersed myself in an intensive six-month program. Throughout this journey, I honed my front-end development skills and had the chance to work on real-world projects. DigitalCrafts provided me with a solid foundation in HTML, CSS, and JavaScript, as well as exposure to modern frameworks and libraries like React. I am passionate about crafting exceptional user experiences through clean and efficient code. I am now eagerly looking forward to leveraging my skills and making a meaningful impact in the industry. If you're interested in connecting or have any exciting opportunities there is a link to my portfolio at the bottom, let's connect!."

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'


    return (
        <Container>
            <AboutDiv>
                <AboutImg src={JordanPic} alt="Jordan Couch's Profile Pic" />
                <AboutName> Jordan Couch </AboutName>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/Jayy2023" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href="https://www.linkedin.com/in/jordan-couch-244b59261/" target="_blank"> <IconImg src={LinkedinIcon} alt="LinkedIn Icon Link" /> </a>
                <a href="https://jayy2023.github.io/portfolio101/" target="_blank"> <IconImg src={PortfolioIcon} alt="Portfolio Icon Link" /> </a>
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

export default Jordan;
