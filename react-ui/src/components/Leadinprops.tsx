import React, { FC } from "react";
import { LeadInPropsType } from "./Leadin";

const h1Styles = {
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "25px"
}

const divStyles = {
    padding: "20px",
    width: "50%",
    backgroundColor: "#efffe3"
}

const pStyles = {
    fontSize: "18px",
    lineHeight: "24px",
    marginTop: "10px"
}

const buttonStyles = {
    padding: "10px",
    backgroundColor: "blue",
    color:  "white",
    border: "none",
    borderRadius: "5px"
}

const centerStyles = {
    display: "flex",
    justifyContent: "center"
}

const LeadInProps: FC<LeadInPropsType> = ({ leadTitle, leadDescription, startGame, isGameRunning }) => {
    return (
      <div style={divStyles}>
        <h1 style={h1Styles} className="lead-in__lead">{leadTitle}</h1>
        <p style={pStyles} className="lead-in__description">{leadDescription}</p>
        {!isGameRunning ? (
          <div style={{...centerStyles, marginTop: "20px"}}>
            <button style={buttonStyles} onClick={startGame}>
              Start Playing
            </button>
          </div>
        ) : (
          <div>The game is running!</div>
        )}
      </div>
    );
};

export default LeadInProps;
