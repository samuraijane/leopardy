import React, { useState } from "react";
import LeadButtonComponent from "./LeadButton"; // importing reusable button component

const LeadInComponent = () => {
  // function is a react component and will return jsx

  const [isGameRunning, setGameRunning] = useState(false); //   // this function defines setGameRunning happening here in the hook, i will create a piece of state for this component. first value is current state value and second value is a function tp update state.

  const startGame = () => {
    // i will call this function when i want the game to start
    setGameRunning(true); // calling this function given by useState which is true.
    console.log(" Ready to Play? Game has started!");
  };

  // function to start game so reusable button can work

  return (
    <div className="lead-in">
      <h1 className="lead-in__lead">
        Leoparady is an exciting trivia game that will put your knowledge of the
        past to the test. Explore the iconic decades from the 1950s to the 2000s
        and challenge yourself with a wide range of trivia questions. Are you
        ready to become a trivia champion of the ages?
      </h1>
      <p className="lead-in__description">
        Answer questions against the clock to test your speed and
        accuracy.Choose from various categories spanning the 1950s to the 2000s
        and dive into the world of history, pop culture, and more.Compete with
        friends or challenge yourself to climb the global leaderboard.
      </p>
      {!isGameRunning ? ( //
        <LeadButtonComponent onClick={startGame}>
          Start Playing
        </LeadButtonComponent>
      ) : (
        <div> The game is running!</div>
      )}
    </div>
  );
};

export default LeadInComponent;

// how to do ternary operator steps
// condition ? value_if_true : value_if_false
// if isGameRunning is false (!isGameRunning is true) render the LeadButtonComponent with the start playing game and the onclick prop
