function Tabletitle({ ...props }) {
  return (
    <div className="h-[65px] w-full bg-color-three rounded-lg text-white">
      <div className="h-full w-1/2 flex flex-row justify-center items-center">
        <span className="w-[50%] text-left m-0 py-0 pl-[75px] pr-0">
          Job title
        </span>
        <span className="w-[30%] text-left">Date modified</span>
        <span className="w-[20%] text-right">Candidates</span>
      </div>
      <div className="h-full w-1/2 flex flex-row justify-end items-center m-0 py-0 pl-0 pr-[75px]">
        <span className="pr-[6px]">Filter</span>
        <img src="./assets/images/filter.png" alt="filter icon" />
      </div>
    </div>
  );
}

export default Tabletitle;
