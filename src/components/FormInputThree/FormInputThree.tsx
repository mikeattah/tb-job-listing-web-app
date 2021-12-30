import React from "react";
import "./FormInputThree.css";

function FormInputThree({ ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.title}</label> <br />
      <select name={props.name} id={props.name} className="form-input">
        <option value="">Select option</option>
        {props.options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}

export default FormInputThree;
