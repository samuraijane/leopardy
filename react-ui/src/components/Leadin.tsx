import React, { useState } from "react";
import LeadInProps from "./Leadinprops"


export interface LeadInPropsType { // this type is an interface the shape of props that Leadin expects
  leadTitle?: string; // why ? // check things checker
  leadDescription?: string;
  startGame?: () => void;
  isGameRunning?: boolean;
}

const LeadIn = () => { 
  
  const [isGameRunning, setGameRunning] = useState(false);

  const startGame = (): void => { // doesnt return just does an action so we use the void type in typescript which means the absence of aby since it is not returining anything  
    setGameRunning(true);
    console.log(" Ready to Play? Game has started!");
  };

  const leadTitle = "Leoparady is an exciting trivia game that will put your knowledge of the past to the test. Explore the iconic decades from the 1950s to the 2000s and challenge yourself with a wide range of trivia questions. Are you ready to become a trivia champion of the ages?"
  const leadDescription = " Answer questions against the clock to test your speed and accuracy.Choose from various categories spanning the 1950s to the 2000s and dive into the world of history, pop culture, and more.Compete with friends or challenge yourself to climb the global leaderboard."

  return (

        <LeadInProps leadTitle={leadTitle} leadDescription={leadDescription}  startGame={startGame} isGameRunning={isGameRunning}  />

  );
};

export default LeadIn;


// // how to do ternary operator steps
// // condition ? value_if_true : value_if_false
// // if isGameRunning is false (!isGameRunning is true) render the LeadButtonComponent with the start playing game and the onclick prop
