import React, { useState }from 'react';
import LinkedinIcon from '../../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../../public/icons/gitHub_icon.png';
import PortfolioIcon from '../../../../public/icons/portfolio_icon_01.png';
import JohnPic from '../../../../public/img/john_Garcia.jpg';
import styled from 'styled-components';

const John = (): JSX.Element => {

    const [readMore, setReadMore] = useState(false);
    
    const text = " I am currently studying in the Digital Craft Web Development Program. I am passionate about coding and love the challenge of solving complex problems. As a resident of Houston, TX, I am inspired by the city's vibrant tech community and am excited about the potential opportunities in the field. I am eager to continue learning and expanding my skills in web development, and I look forward to contributing to the ever-evolving world of technology."

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'

    return (
        <Container>
            <AboutDiv>
                <AboutImg src={JohnPic} alt="John Garcia's Profile Pic" />
                <AboutName> John Garcia </AboutName>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/jhongarcian" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href="https://www.linkedin.com/in/john-edward-garcia-ba897b1b0/" target="_blank"> <IconImg src={LinkedinIcon} alt="LinkedIn Icon Link" /> </a>
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

export default John;
