import React from "react";

function UploadFiles({ ...props }) {
  return (
    <div className="h-[250px] w-full flex flex-col justify-center items-center border border-color-three rounded-lg box-border bg-white my-[40px] mx-0 py-[12px] px-[20px]">
      <img
        src={require("../assets/images/cloud-computing.png")}
        alt="upload cloud icon"
        className="m-0 p-0"
      />
      {/* Icons made by https://www.flaticon.com/authors/itim2101 */}
      <p className="text-color-three font-semibold my-[1px] mx-0 p-0 text-center">
        Drag and drop your CV here
      </p>
      <p className="text-color-three font-semibold my-[1px] mx-0 p-0">or</p>
      <button
        className="my-[4px] mx-0 py-[9px] px-[20px] text-white font-semibold border-0 rounded-lg bg-color-three hover:bg-color-three-9 hover:cursor-pointer"
        onClick={() => {
          props.onClick();
        }}
      >
        Browse files
      </button>
      <p className={`${props.color} font-semibold my-[1px] mx-0 p-0`}>
        {props.fileUploaded}
      </p>
    </div>
  );
}

export default UploadFiles;
