import React from "react";

function SearchBarGuest({ ...props }) {
  return (
    <div className="h-[150px] md:h-[80px] w-full mt-[-40px] mb-0 py-0 pl-[25px] md:pl-[75px] lg:pl-[125px] pr-[25px] md:pr-[50px] lg:pr-[75px] z-10">
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly md:justify-between items-center m-0 py-0 px-[20px] rounded-lg bg-white shadow-aaa">
        <img
          src={require("../assets/images/search-interface-symbol.png")}
          alt="location icon"
          className="mx-2 hidden md:inline-block"
        />
        <input
          type="text"
          id="job-conditions"
          placeholder="Front end developer"
          className="h-[25%] md:h-1/2 w-full md:w-1/2 m-0 py-2 px-3 outline-0 border-[0.3px] md:border-none border-color-one rounded-lg shadow-none text-center md:text-left text-color-eleven-8"
        />
        <div className="h-px md:h-3/4 w-full md:w-0 py-0 px-0 md:px-[7.5px] border-l border-color-one"></div>
        <img
          src={require("../assets/images/location.png")}
          alt="location icon"
          className="mx-2 hidden md:inline-block"
        />
        <input
          type="text"
          id="job-location"
          placeholder="Ikeja, Lagos"
          className="h-[25%] md:h-1/2 w-full md:w-[42%] m-0 py-2 px-3 outline-0 border-[0.3px] md:border-none border-color-one rounded-lg shadow-none text-center md:text-left text-color-eleven-8"
        />
        <input
          type="submit"
          id="submit-search"
          value="Search"
          className="h-[40px] md:h-[47px] w-[121px] m-0 p-0 md:p-[8px] text-[20px] text-white hover:text-color-nine border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer bg-color-nine hover:bg-white"
        />
      </div>
      {/* Icons made by https://www.flaticon.com/authors/catalin-fertu */}
    </div>
  );
}

export default SearchBarGuest;
