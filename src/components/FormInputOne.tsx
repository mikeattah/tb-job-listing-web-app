import React from "react";

function FormInputTwo({ ...props }) {
  const { name, title, type } = props;
  return (
    <div className="h-10 w-full text-color-three text-[14px] font-semibold my-[25px] mx-0 p-0">
      <label htmlFor={name}>{title}</label> <br />
      <input
        type={type}
        name={name}
        id={name}
        className="w-full py-[12px] px-[20px] my-[8px] mx-0 border border-color-three rounded-lg outline-0 bg-white box-border inline-block text-color-eleven-8"
      />
    </div>
  );
}

export default FormInputTwo;
