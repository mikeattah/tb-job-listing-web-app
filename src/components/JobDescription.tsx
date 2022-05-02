import React from "react";

function JobDescription({ ...props }) {
  return (
    <div className="h-full w-full flex flex-col justify-start items-start text-color-three bg-white rounded-xl shadow-lg m-0 p-4 md:p-8">
      <div className="h-[50px] w-full flex flex-row justify-center md:justify-start items-center text-[25px] font-semibold m-0 p-0">
        <span className="m-0 p-0">{props.jobTitle}</span>
      </div>
      <div className="h-[25px] w-full flex flex-row justify-center md:justify-start items-center text-color-eleven">
        <img
          src={require("../assets/images/location.png")}
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        <span className="">{props.location}</span>
      </div>
      <div className="h-[100px] w-full flex flex-row justify-center md:justify-start items-center border-b border-color-nine my-0 p-0 divide-y divide-color-nine">
        <button className="m-0 py-[8px] px-[35px] text-white font-light hover:text-color-three bg-color-three hover:bg-white border border-color-three rounded-lg">
          Apply via Find Jobs
        </button>
      </div>
      <div className="h-[675px] md:h-[1285px] lg:h-[857px] w-full flex flex-col justify-between items-center">
        <div className="h-[100px] w-full flex flex-row justify-center align-center">
          <div className="h-full w-1/2 flex flex-col justify-start align-left">
            <span className="">Company:</span>
            <span className="">{props.company}</span>
            <span className="">Category:</span>
            <span className="">{props.category}</span>
            <span className="">Job Type:</span>
            <span className="">{props.jobType}</span>
          </div>
          <div className="h-full w-1/2 flex flex-col justify-start align-left">
            <span className="">Salary:</span>
            <span className="">{props.salary}</span>
            <span className="">Work Condition:</span>
            <span className="">{props.workCondition}</span>
          </div>
        </div>
        <div className="h-[575px] md:h-[1185px] lg:h-[925px] w-full"></div>
      </div>
    </div>
  );
}

export default JobDescription;
