function TableContent({ ...props }) {
  return (
    <div className="h-[65px] w-full bg-white rounded-lg text-black shadow-ccc">
      <div className="h-full w-1/2 flex flex-row justify-center items-center">
        <span className="w-[50%] text-left m-0 py-0 pl-[75px] pr-0">
          Front end developer
        </span>
        <span className="w-[30%] text-left pl-[30px]">18/7/21</span>
        <span className="w-[20%] text-right pr-[35px]">100</span>
      </div>
      <div className="h-full w-1/2 flex flex-row justify-between items-center m-0 p-0">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TableContent;
