import React from "react";

function SearchBarGuest({ ...props }) {
  const searchIcon = require("../assets/images/search-interface-symbol.png");
  const locationIcon = require("../assets/images/location.png");

  return (
    <div className="h-[150px] md:h-[80px] w-full mt-[-40px] mb-0 py-0 pl-[25px] md:pl-[75px] lg:pl-[125px] pr-[25px] md:pr-[50px] lg:pr-[75px] z-10">
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly md:justify-between items-center m-0 py-0 px-[20px] rounded-lg bg-white shadow-aaa">
        <input
          type="text"
          id="job-conditions"
          placeholder="Front end developer"
          className={`h-[25%] md:h-1/2 w-full md:w-1/2 m-0 py-2 px-3 outline-0 border-[0.3px] md:border-none border-color-one rounded-lg shadow-none text-center md:text-left bg-${searchIcon} bg-no-repeat bg-left`}
        />
        <div className="h-px md:h-3/4 w-full md:w-0 py-0 px-0 md:px-[7.5px] border-l border-color-one"></div>
        <input
          type="text"
          id="job-location"
          placeholder="Ikeja, Lagos"
          className={`h-[25%] md:h-1/2 w-full md:w-[42%] m-0 py-2 px-3 outline-0 border-[0.3px] md:border-none border-color-one rounded-lg shadow-none text-center md:text-left bg-${locationIcon} bg-no-repeat bg-left`}
        />
        <input
          type="submit"
          id="submit-search"
          value="Search"
          className="h-[40px] md:h-[47px] w-[121px] m-0 p-0 md:p-[8px] text-[20px] text-white hover:text-color-nine border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer bg-color-nine hover:bg-white"
        />
      </div>
      <div className="hidden">
        {" "}
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/catalin-fertu"
          title="Catalin Fertu"
        >
          {" "}
          Catalin Fertu{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
      </div>
    </div>
  );
}

export default SearchBarGuest;
