import React from 'react'
import  SearchBar from "../components/search-bar/search-bar";
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
      <SearchBar />
      <div style={{ ...rowStyles }}>
        <LeadIn />
      </div>
    </>
  );
};

export default Landing;
