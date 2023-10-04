import React from 'react'
import  SearchBar from "../components/search-bar/search-bar"
import styled from "styled-components";

const Landing = () => {
  return (
    <Imgcap>
      <h1> Home Page </h1>
        <div className='imgCapContainer'>
          <div className='imgContainer'> 
            <div className='sideText'>Create your own game</div>
            <img className='img' src="https://www.weareteachers.com/wp-content/uploads/Managing-Large-Class-Sizes.png" alt="" />
          
          </div>
          <div className='caption'>
            <div className='text'>
              <h1 className='heading'>Unleash Your Knowledge Potential through Interactive jeopardy-style Quizzes and Challenging Trivia</h1>
              <div className='description'>Embark on a thrilling journey of knowledge exploration and assessment using our interactive jeopardy-style template. Create and share captivating games, or choose from our extensive database. Ignite curiosity and empower learning like never before</div>
              <a className='button'>Create your own game</a>
            </div>
          </div>
        </div>
        <div className='imgCapContainer2'>
          <div className='imgContainer'> 
            <img className='img' src="https://www.weareteachers.com/wp-content/uploads/Managing-Large-Class-Sizes.png" alt="" />
          
          </div>
          <div className='caption'>
            <div className='text'>
              <h1 className='heading'>Unleash Your Knowledge Potential through Interactive jeopardy-style Quizzes and Challenging Trivia</h1>
              <div className='description'>Embark on a thrilling journey of knowledge exploration and assessment using our interactive jeopardy-style template. Create and share captivating games, or choose from our extensive database. Ignite curiosity and empower learning like never before</div>
              <a className='button'>Create your own game</a>
            </div>
          </div>
        </div>
    </Imgcap>
  )
};

export default Landing;
  
const Imgcap = styled.section`
  .imgCapContainer {
    display: flex;
    flex-direction: row;
  }
  .imgCapContainer2 {
    display: flex;
    flex-direction: row-reverse;;
  }

  .img {
    height: 100%;
    width: 100%;
    aspect-ratio: 4 / 3;
  }

  .imgContainer{
    display: flex:
    background-size: cover;
    height: 70vh;
  }

  .caption {
    background-color: #efffe3;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  .heading{
    align-self: center;
    font-size: 1.5rem;
    text-align : center;
    flex: wrap;
    line-height: 1;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15%;

  }

  .description {
    font-size: 1.2rem;
    align-self: center;
    line-height: 1;
    padding: 1.5em 5em;
  }

  .button {
    font-size: 1.25rem;
    background-color: #fbed55;
    padding: 0.7em 1em;
    font-weight: 540;
    border-radius: 3px;
    box-shadow: 0 4px 4px rgba(107,104,104,.28);
  }

  .sideText{ 
    color: #1d8bc3;
    position: absolute;
    font-size: 20px;
    top: 462px;
    padding: 5px 20px;
    border-radius: 0 60px 60px 0;
    background: rgba(0,0,0,.54);
  }
  


  // @media (max-width: 540px) {
  //   .img {
  //       height: 30vh;

  //   }
  // }

  // @media (max-width: 976px) {
  //   .imgCapContainer {
  //       height: 30vh;

  //   }
  // }


  `