import React from "react";

function TableContent({ ...props }) {
  return (
    <div className="h-[65px] w-full flex flex-row justify-center items-center group bg-white rounded-lg text-color-ten hover:text-black text-xs md:text-base shadow-ccc">
      <div className="h-full w-3/5 md:w-[55%] lg:w-1/2 flex flex-row justify-between lg:justify-center items-center m-0 py-0 pl-[15px] md:pl-[40px] lg:pl-[75px] pr-0">
        <div className="relative h-[10px] w-[10px] border border-color-nine bg-white group-hover:bg-color-nine rounded-full my-0 mr-[5px] md:mr-[12.5px] lg:mr-[25px] ml-[-8px] md:ml-[-20px] lg:ml-[-36px] p-0"></div>
        <span className="w-[35%] text-left m-0 p-0">Front end developer</span>
        <span className="w-[45%] text-center m-0 p-0">18/7/21</span>
        <span className="w-[20%] text-right m-0 p-0">100</span>
      </div>
      <div className="h-full w-2/5 md:w-[45%] lg:w-1/2 flex flex-col md:flex-row justify-evenly md:justify-end lg:justify-between items-end md:items-center m-0 py-0 px-[15px] md:px-[40px] lg:px-[75px]">
        <button
          type="button"
          className="my-0 mr-0 md:mr-8 lg:mr-12 ml-0 lg:m-0 py-[2px] px-[18px] md:px-[25px] lg:px-[37px] text-[12px] md:text-[16px] text-color-ten group-hover:text-white border-2 border-white group-hover:border-color-nine rounded-md font-normal hover:cursor-pointer bg-white group-hover:bg-color-nine"
        >
          Edit
        </button>
        <button
          type="button"
          className="m-0 py-[2px] px-[9px] md:px-[18px] lg:px-[33px] text-[12px] md:text-[16px] group-hover:text-color-one border-2 border-white group-hover:border-color-one font-normal hover:cursor-pointer bg-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TableContent;
