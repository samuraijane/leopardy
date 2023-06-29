import React, {useState} from 'react';
import LinkedinIcon from '../../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../../public/icons/gitHub_icon.png';
import PortfolioIcon from '../../../public/icons/portfolio_icon_01.png';
import ChristinaPic from '../../../public/img/christina_barron.jpg';
import styled from 'styled-components';

const Christina = (): JSX.Element => {

    const [readMore, setReadMore] = useState(false);
    
    const text = "I am a graphic and website designer based out of San Diego, California. After graduating with my Bachelors of Science in Business Marketing specializing in Integrated Marketing Communications, I got a job in the non-profit sector designing and creating content. Since opening my own business, Christina Barron Designs, I have gained more work experience the design field and now have enrolled in Digital Crafts Web Development Program to further my education. My favorite drink is a Gin and Tonic and love Kate Sessions park looking over San Diego."

    const ReadMoreLink = (event: React.MouseEvent) => {
        setReadMore(!readMore)
    }
    
    const linkName = readMore ? 'Read Less << ': 'Read More >>'

    return (
        <Container>
            <AboutDiv>
                <AboutImg src={ChristinaPic} alt="Christina Barron's Profile Pic" />
                <AboutName> Christina Barron</AboutName>
                <AboutP> 
                    {readMore ? text : `${text.substring(0, 250)}`}
                    <AboutButton onClick={ReadMoreLink}>{linkName}</AboutButton> 
                </AboutP>
            </AboutDiv>
            <AboutIcons>
                <a href="https://github.com/christinab980" target="_blank"> <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
                <a href="https://www.linkedin.com/in/christina-barron-9446b2262/" target="_blank"> <IconImg src={LinkedinIcon} alt="LinkedIn Icon Link" /> </a>
                <a href="https://christinabarronportfolio.netlify.app/" target="_blank"> <IconImg src={PortfolioIcon} alt="Portfolio Icon Link" /> </a>
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

export default Christina;

