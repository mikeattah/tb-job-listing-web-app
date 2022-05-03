import React from "react";
import { nanoid } from "nanoid";

function FormInputTwo({ ...props }) {
  const { name, title, options } = props;
  return (
    <div className="h-10 w-full text-color-three text-[14px] font-semibold my-[25px]">
      <label htmlFor={name}>{title}</label> <br />
      <select
        name={name}
        id={name}
        className="w-full py-[12px] px-[20px] my-[8px] mx-0 border border-color-three rounded-lg outline-0 bg-white box-border inline-block text-color-eleven-8"
      >
        <option value="">Select option</option>
        {options.map((option: string) => (
          <option key={nanoid()} value={option}>
            {option}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}

export default FormInputTwo;
