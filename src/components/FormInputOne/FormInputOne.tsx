import React from "react";
import "./FormInputOne.css";

function FormInputOne({ ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.title}</label> <br />
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="form-input"
      />
    </div>
  );
}

export default FormInputOne;
