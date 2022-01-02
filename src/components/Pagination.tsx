import React, { useState } from "react";

function Pagination({ ...props }) {
  const [pageIndex, setPageIndex] = useState(0);

  const pageElements: number = 4;
  let pageCount: number = 5; // change back to zero
  let pageArray: number[] = [];

  if (props.data) pageCount = Math.ceil(props.data.length / pageElements);

  for (let i = 0; i < pageCount; i++) {
    pageArray = [...pageArray, i];
  }
  if (props.data) console.log(props.data.length, pageArray.length); // <= 11, 3

  return (
    <div className="h-[150px] w-[45%] flex flex-row justify-start items-start m-0 pt-[40px] pb-0 px-0">
      <button
        onClick={() => setPageIndex(pageIndex - pageElements)}
        className="text-color-three hover:text-white hover:bg-color-three font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[10px] ml-0 py-[5px] px-[15px] hover:cursor-pointer"
        disabled={pageIndex === pageArray[0] ? "true" : ""}
      >
        &#60;
      </button>
      {pageArray.map((page, index) => {
        return (
          <button
            onClick={() => setPageIndex(pageElements * index)}
            className={`text-color-three hover:text-white hover:bg-color-three font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[10px] ml-0 py-[5px] px-[15px] hover:cursor-pointer ${
              pageIndex === pageElements * index ? "" : ""
            }`}
          >
            {page + 1}
          </button>
        );
      })}
      <button
        onClick={() => setPageIndex(pageIndex + pageElements)}
        className="text-color-three hover:text-white hover:bg-color-three font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[10px] ml-0 py-[5px] px-[15px] hover:cursor-pointer"
        disabled={
          pageIndex === pageArray[pageArray.length - 1] * pageElements
            ? "true"
            : ""
        }
      >
        &#62;
      </button>
    </div>
  );
}

export default Pagination;
