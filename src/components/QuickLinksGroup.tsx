import React from "react";

function QuickLinksGroup({ ...props }) {
  return (
    <div className="h-full w-1/2 flex flex-col justify-center md:justify-start lg:justify-center items-center md:items-start">
      <p className="text-white text-[16px] lg:text-[18px] font-semibold text-center md:text-left">
        Quick Links
      </p>
      <ul className="text-color-white-6 list-none text-center md:text-left">
        <li className="my-2 mx-0 p-0 text-[14px] lg:text-[16px] hover:text-white hover:cursor-pointer">
          <a className="">Home</a>
        </li>
        <li className="my-2 mx-0 p-0 text-[14px] lg:text-[16px] hover:text-white hover:cursor-pointer">
          <a className="">About</a>
        </li>
        <li className="my-2 mx-0 p-0 text-[14px] lg:text-[16px] hover:text-white hover:cursor-pointer">
          <a className="">Calendar</a>
        </li>
        <li className="my-2 mx-0 p-0 text-[14px] lg:text-[16px] hover:text-white hover:cursor-pointer">
          <a className="">Terms and condition</a>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinksGroup;
