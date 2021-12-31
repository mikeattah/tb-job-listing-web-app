function FormInputOne({ ...props }) {
  return (
    <div className="h-10 w-full text-color-three text-[14px] font-medium my-[25px]">
      <label htmlFor={props.name}>{props.title}</label> <br />
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="h-9/10 w-full py-[12px] px-[20px] my-[8px] mx-0 border border-color-three rounded-lg outline-0 bg-white box-border inline-block"
      />
    </div>
  );
}

export default FormInputOne;
