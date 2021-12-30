import React from "react";
import "./Circles.css";

function Circles({ ...props }) {
  return (
    <div className="circles-container">
      <div className="circle-one"></div>
      <div className="circle-two"></div>
      <div className="circle-three"></div>
    </div>
  );
}

export default Circles;
