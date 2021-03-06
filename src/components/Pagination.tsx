import React from "react";
import { nanoid } from "nanoid";

function Pagination({ ...props }) {
  const {
    pageIndex,
    pageElements,
    pageArray,
    onLeftArrowClick,
    onRightArrowClick,
    onNumberClick,
  } = props;
  return (
    <div className="h-[150px] w-full md:w-[45%] flex flex-row justify-center md:justify-start items-start m-0 pt-[40px] pb-0 px-0">
      <button
        type="button"
        onClick={() => onLeftArrowClick?.()}
        className="text-color-three hover:text-white hover:bg-color-three font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[6px] md:mr-[8px] lg:mr-[10px] ml-0 py-[3px] md:py-[4px] lg:py-[5px] px-[9px] md:px-[12px] lg:px-[15px] hover:cursor-pointer"
        disabled={pageIndex === pageArray[0] ? true : false}
      >
        &#60;
      </button>
      {pageArray.map((page: number, index: number) => {
        return (
          <button
            type="button"
            key={nanoid()}
            value={page}
            onClick={(value) => onNumberClick?.(value)}
            className={`font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[6px] md:mr-[8px] lg:mr-[10px] ml-0 py-[3px] md:py-[4px] lg:py-[5px] px-[9px] md:px-[12px] lg:px-[15px] hover:cursor-pointer ${
              pageIndex === pageElements * index
                ? "text-white bg-color-three hover:text-color-three hover:bg-white"
                : "text-color-three bg-white hover:text-white hover:bg-color-three"
            }`}
          >
            {page + 1}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onRightArrowClick?.()}
        className="text-color-three hover:text-white hover:bg-color-three font-semibold border-[0.2px] border-color-three rounded-md my-0 mr-[6px] md:mr-[8px] lg:mr-[10px] ml-0 py-[3px] md:py-[4px] lg:py-[5px] px-[9px] md:px-[12px] lg:px-[15px] hover:cursor-pointer"
        disabled={
          pageIndex === pageArray[pageArray.length - 1] * pageElements
            ? true
            : false
        }
      >
        &#62;
      </button>
    </div>
  );
}

export default Pagination;
