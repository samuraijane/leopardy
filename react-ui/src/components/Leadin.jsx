import React from "react";

const LeadInComponent = () => {
  return (
    <div className="lead-in">
      <h1 className="lead-in__title">Welcome to Leoparady!</h1>
      <p className="lead-in__description">
        Leoparady is an exciting trivia game that will put your knowledge of the
        past to the test. Explore the iconic decades from the 1950s to the 2000s
        and challenge yourself with a wide range of trivia questions. Are you
        ready to become a trivia champion of the ages?
      </p>
      <div className="lead-in__features">
        <div className="lead-in__feature">
          <i className="far fa-clock lead-in__feature-icon"></i>
          <p className="lead-in__feature-description">
            Answer questions against the clock to test your speed and accuracy.
          </p>
        </div>
        <div className="lead-in__feature">
          <i className="fas fa-globe lead-in__feature-icon"></i>
          <p className="lead-in__feature-description">
            Choose from various categories spanning the 1950s to the 2000s and
            dive into the world of history, pop culture, and more.
          </p>
        </div>
        <div className="lead-in__feature">
          <i className="fas fa-users lead-in__feature-icon"></i>
          <p className="lead-in__feature-description">
            Compete with friends or challenge yourself to climb the global
            leaderboard.
          </p>
        </div>
      </div>
      <button className="lead-in__cta">Start Playing</button>
    </div>
  );
};

export default LeadInComponent;
