import React from "react";

function TableTitle({ ...props }) {
  return (
    <div className="h-[65px] w-full flex flex-row justify-center items-center bg-color-three rounded-lg text-white text-xs md:text-base">
      <div className="h-full w-3/5 md:w-[55%] lg:w-1/2 flex flex-row justify-center items-center m-0 py-0 pl-[15px] md:pl-[40px] lg:pl-[75px] pr-0">
        <span className="w-[35%] text-left m-0 p-0">Job title</span>
        <span className="w-[45%] text-center m-0 p-0 truncate">
          Date <br /> modified
        </span>
        <span
          title="Candidates"
          className="w-[20%] text-right m-0 p-0 truncate"
        >
          Candidates
        </span>
      </div>
      <div className="h-full w-2/5 md:w-[45%] lg:w-1/2 flex flex-row justify-end items-center m-0 py-0 pr-[15px] pl-0 md:pr-[40px] md:pl-0 lg:pr-[75px] lg:pl-0">
        <span className="mr-[8px]">Filter</span>
        <img src={require("../assets/images/filter.png")} alt="filter icon" />
      </div>
    </div>
  );
}

export default TableTitle;
