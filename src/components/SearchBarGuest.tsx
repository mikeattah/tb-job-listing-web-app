function SearchBarGuest({ ...props }) {
  // bg-[url('assets/images/search-interface-symbol.png')] bg-no-repeat bg-left
  // bg-[url('assets/images/location.png')] bg-no-repeat bg-left

  return (
    <div className="h-[80px] w-full mt-[-40px] mb-0 py-0 pl-[125px] pr-[75px] z-10">
      <div className="h-full w-full flex flex-row justify-between items-center m-0 py-0 px-[20px] rounded-lg bg-white shadow-aaa">
        <input
          type="text"
          id="job-conditions"
          className="h-1/2 w-1/2 m-0 py-2 px-0 outline-0"
        />
        <div className="h-3/4 w-0 py-0 px-[7.5px] border-l border-color-one"></div>
        <input
          type="text"
          id="job-location"
          className="h-1/2 w-[42%] m-0 py-2 px-0 outline-0"
        />
        <input
          type="submit"
          id="submit-search"
          value="Search"
          className="h-[47px] w-[121px] m-0 p-[8px] text-[20px] text-white hover:text-color-nine border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer bg-color-nine hover:bg-white"
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
