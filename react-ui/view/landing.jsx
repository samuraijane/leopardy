<<<<<<< HEAD
import React from 'react'
import  SearchBar from "../components/search-bar/search-bar"

const Landing = () => {
    return (
      <SearchBar />
    )
  };
  
  export default Landing;
  
=======
import React from "react";
import LeadIn from "../src/components/Leadin";

const Landing = () => {
  const rowStyles = {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  };

  return (
    <>
      <h1> Home Page </h1>
      <div style={{ ...rowStyles }}>
        <LeadIn />
      </div>
    </>
  );
};

export default Landing;
>>>>>>> 547138c (add leanin in addition to leanin props, and fix merge)
