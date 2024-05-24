import React from "react";

const ScrollIndicator = () => {
  return (
    <span className="scroll-container">
      <span className="scroll">S</span>
      <span className="scroll">C</span>
      <span className="scroll">R</span>
      <span className="scroll">O</span>
      <span className="scroll">L</span>
      <span className="scroll">L</span>
      <div className="flex content-center flex-column w-full absolute">
        <div className="scroll-line mx-auto mt-2 w-full relative"></div>
      </div>
    </span>
  );
};

export default ScrollIndicator;
