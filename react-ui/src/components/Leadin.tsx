import React, { useState } from "react";
import LeadInProps from "./Leadinprops"

const LeadIn: React.FC = () => {
  
  const [isGameRunning, setGameRunning] = useState(false);

  const startGame = (): void => {
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
