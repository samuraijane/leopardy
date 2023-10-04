import React from 'react';
import styled from 'styled-components';

  
const Footer = () => {
  const getTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' });
    return currentTime;
  }

  
  
  return (
    <Container  > 
      <div  className='y-wrap'>
        <ul className='footer'>
          <li className='footer'> <a>Privacy Policy</a></li>
          <li className='footer'> <a>Copyright 2023</a></li>
          <li className='footer'> <a href='https://github.com/'> GitHub </a></li>
          <li className='footer'> <a href='/about-us'> About </a></li>
          <li className='footer'> <a>{getTime()}</a></li>
      </ul>
      
        
        </div>
    </Container>
  )
};



export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  background-color: darkgray;
  color: white;
  padding: 15px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  .footer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1 1 auto;
    color: white;
    height: 20px;
    background-color: dark grey;
  }
  .footer li {
    width: 20%;
    color: white;
    
  }
  .footer ul {
    width: 20%;
    color: white;
   
  }
  .footer ul li {
    width: 20%;
    color: white;
    
  }
  .footer ul li a {
    width: 20%;
    color: white;
    height: 20px;
    
  }
  .footer ul li a:hover {
    width: 20%;
    color: black;
    height: 20px;
  }
  .footer a:hover {
    color: #000000;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    width-max: 20px;
  }

  
`;