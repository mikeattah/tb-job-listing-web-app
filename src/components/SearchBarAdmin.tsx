function SearchBarAdmin({ ...props }) {
  return (
    <div className="h-[80px] w-full m-0 p-0 flex flex-row justify-center items-center">
      <div className="h-3/5 w-2/5 bg-white rounded-lg shadow-aaa">
        <input
          type="text"
          id="job-title"
          className="h-full w-4/5 m-0 p-0 outline-0 rounded-lg"
        />
        <input
          type="submit"
          id="submit-search"
          value="Search"
          className="m-0 py-[3px] px-[20px] text-[16px] text-white hover:text-color-nine border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer bg-color-nine hover:bg-white"
        />
      </div>
      <div className="h-full w-3/5 flex flex-row justify-end items-center m-0 p-0">
        <button
          id="new-job"
          className="m-0 py-[8px] px-[20px] text-[16px] text-white hover:text-color-nine
          border-2 border-color-nine rounded-lg font-normal hover:cursor-pointer
          bg-color-nine hover:bg-white shadow-bbb"
        >
          + New Job
        </button>
      </div>
    </div>
  );
}

export default SearchBarAdmin;
