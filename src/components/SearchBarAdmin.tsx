import React from "react";

function SearchBarAdmin({ ...props }) {
  return (
    <div className="h-[125px] w-full m-0 p-0 flex flex-col md:flex-row justify-evenly md:justify-center items-center">
      <div className="h-2/5 w-full md:w-3/5 lg:w-2/5 flex flex-row justify-between items-center bg-white rounded-lg shadow-aaa m-0 py-0 px-2">
        <input
          type="text"
          id="job-title"
          placeholder="Front end developer"
          className="h-full w-[70%] lg:w-4/5 m-0 py-0 px-1 outline-0 rounded-lg"
        />
        <input
          type="submit"
          id="submit-search"
          value="Search"
          className="m-0 py-[3px] px-[20px] text-[16px] text-white hover:text-color-nine border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer bg-color-nine hover:bg-white"
        />
      </div>
      <div className="h-1/2 md:h-full w-full md:w-2/5 lg:w-3/5 flex flex-row justify-end items-center m-0 p-0">
        <button
          id="new-job"
          className="m-0 py-[3px] md:py-[8px] px-[20px] text-[16px] text-white hover:text-color-nine
          border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer
          bg-color-nine hover:bg-white shadow-bbb"
          onClick={() => props.addNewJob()}
        >
          + New Job
        </button>
      </div>
    </div>
  );
}

export default SearchBarAdmin;
