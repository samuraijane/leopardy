import React from "react";

interface LeadButtonComponentProps {
  onClick : any
  children : any 
}

// LeadButtonComponent is a reusable component with props to be used in leadin component
const LeadButtonComponent = ({ onClick, children }: LeadButtonComponentProps) => {
  return (
    <button className="lead-in__cta" onClick={onClick}>
      {children}
    </button>
  );
};

export default LeadButtonComponent;

// childern is anything passed down between the button component
