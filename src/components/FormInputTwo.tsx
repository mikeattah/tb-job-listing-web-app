import React from "react";

function FormInputTwo({ ...props }) {
  return (
    <div className="h-10 w-full text-color-three text-[14px] font-semibold my-[25px]">
      <label htmlFor={props.name}>{props.title}</label> <br />
      <select
        name={props.name}
        id={props.name}
        className="w-full py-[12px] px-[20px] my-[8px] mx-0 border border-color-three rounded-lg outline-0 bg-white box-border inline-block"
      >
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

export default FormInputTwo;
