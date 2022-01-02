function JobSummary({ ...props }) {
  return (
    <div className="h-[300px] w-full flex flex-col justify-start items-start text-color-three hover:text-white bg-white hover:bg-color-three rounded-xl shadow-lg hover:cursor-pointer m-0 p-8">
      <div className="h-[50px] w-full flex flex-row justify-between items-center text-[20px] font-semibold">
        <span className="">Front end developer</span>
        <span className="">$2K - $5K</span>
      </div>
      <div className="h-[25px] w-full flex flex-row justify-start items-center text-color-eleven">
        <img
          src="../assets/images/location.png"
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        <span className="">Ikeja, Lagos</span>
      </div>
      <p className="h-[150px] w-full my-[10px] mx-0 p-0 text-color-eleven">
        We seek an experienced JavaScript web application developer who is
        proficient in React.js and has excellent communication skills
      </p>
      <div className="h-[50px] w-full flex flex-row justify-end items-center">
        <button className="m-0 py-[10px] px-[20px] text-white hover:text-color-nine bg-color-nine hover:bg-white border-2 border-color-nine rounded-lg">
          See more
        </button>
      </div>
    </div>
  );
}

export default JobSummary;
