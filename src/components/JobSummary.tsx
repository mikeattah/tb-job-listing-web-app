import React from "react";

function JobSummary({ ...props }) {
  return (
    <div className="h-[300px] md:h-[425px] lg:h-[300px] w-[450px] md:w-full flex flex-col justify-start items-start group bg-white hover:bg-color-three rounded-xl shadow-xl my-0 mx-4 md:m-0 p-8">
      <div className="h-[50px] md:h-[75px] lg:h-[50px] w-full flex flex-row md:flex-col lg:flex-row justify-between items-center md:items-start lg:items-center text-[20px] font-semibold text-color-three group-hover:text-white">
        <span className="">{props.title}</span>
        <span className="">{`${props.salary.slice(
          0,
          4
        )}K - ${props.salary.slice(11, 15)}K`}</span>
      </div>
      <div className="h-[25px] w-full flex flex-row justify-start items-center text-color-eleven group-hover:text-white">
        <img
          src={require("../assets/images/location.png")}
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        <span className="">{props.location}</span>
      </div>
      <p className="h-[150px] md:h-[250px] lg:h-[150px] w-full my-[10px] mx-0 p-0 text-color-eleven group-hover:text-white text-left">
        {props.description}
      </p>
      <div className="h-[50px] w-full flex flex-row justify-end items-center self-end">
        <button className="m-0 py-[10px] px-[20px] text-white hover:text-color-nine group-hover:text-color-nine bg-color-nine hover:bg-white group-hover:bg-white border-2 border-color-nine rounded-lg">
          See more
        </button>
      </div>
    </div>
  );
}

export default JobSummary;
