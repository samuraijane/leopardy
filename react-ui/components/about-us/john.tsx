import React from 'react';
import LinkedinIcon from '../../public/icons/linkedin_icon_01.png';
import GitHubIcon from '../../public/icons/gitHub_icon.png';
import PortfolioIcon from '../../public/icons/portfolio_icon_01.png';
import JohnPic from '../../public/img/john_Garcia.jpg';
import styled from 'styled-components';

const John = (): JSX.Element => {

    // const [readMore, setReadMore] = useState(false);

    // const ReadMoreLink = (event: React.MouseEvent) => {
    //     setReadMore(!readMore)
    // }

    // const extraContent = 
    
    // <div>
    //     <p>designing and creating content. Since opening my own business, Christina Barron Designs, I have gained more work experience the design field and now have enrolled in Digital Crafts Web Development Program to further my education. My favorite drink is a Gin and Tonic and love Kate Sessions park looking over San Diego.</p>
    // </div>

    // const linkName = readMore ? 'Read Less << ': 'Read More >>'

    // }

    return (
        <Container>
         <AboutDiv>
            <AboutImg src={JohnPic} alt="John Garcia's Profile Pic" />
            <AboutName> John Garcia </AboutName>
            <AboutP> I am currently studying in the Digital Craft Web Development Program. I am passionate about coding and love the challenge of solving complex problems. As a resident of Houston, TX... </AboutP>
         </AboutDiv>
         <AboutIcons>
            <a href="https://github.com/jhongarcian" > <IconImg src={GitHubIcon} alt="Github Icon Link" /> </a>
            <a href="https://www.linkedin.com/in/john-edward-garcia-ba897b1b0/" > <IconImg src={LinkedinIcon} alt="LinkedIn Icon Link" /> </a>
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
    color: #fff;
    margin: 10px
`
const AboutImg = styled.img`
    width: 120px;
    border-radius: 50%;
    margin-bottom: -10px
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
