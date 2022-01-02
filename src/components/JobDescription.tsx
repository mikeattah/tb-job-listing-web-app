function JobDescription({ ...props }) {
  return (
    <div className="h-full w-full flex flex-col justify-start items-start text-color-three bg-white rounded-xl shadow-lg m-0 p-8">
      <div className="h-[50px] w-full flex flex-row justify-start items-center text-[25px] font-semibold m-0 p-0">
        <span className="m-0 p-0">Front end developer</span>
      </div>
      <div className="h-[25px] w-full flex flex-row justify-start items-center text-color-eleven">
        <img
          src="../assets/images/location.png"
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        <span className="">Ikeja, Lagos</span>
      </div>
      <div className="h-[100px] w-full flex flex-row justify-start items-center border-b border-color-nine my-0 p-0 divide-y divide-color-nine">
        <button className="m-0 py-[8px] px-[35px] text-white font-light hover:text-color-three bg-color-three hover:bg-white border border-color-three rounded-lg">
          Apply via Find Jobs
        </button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default JobDescription;
