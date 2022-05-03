import React from "react";

function NavBar({ ...props }) {
  return (
    <div className="h-full w-full flex flex-row justify-end items-center group m-0 p-0">
      <div className="block md:hidden text-color-eight border-2 border-color-eight py-1 px-3 text-[20px]">
        ☰
      </div>
      <ul className="absolute top-[75px] left-[25px] md:static hidden group-hover:flex md:flex flex-col md:flex-row justify-end items-start md:items-center list-none border-2 md:border-0 border-color-eight">
        <li className="my-0 mx-3 md:mx-4 lg:mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
          <a href="#" className="">
            Jobs
          </a>
        </li>
        <li className="my-0 mx-3 md:mx-4 lg:mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
          <a href="#" className="">
            Company Review
          </a>
        </li>
        <li className="my-0 mx-3 md:mx-4 lg:mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
          <a href="#" className="">
            Find Salaries
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="absolute top-[165px] left-0 md:static hidden group-hover:block md:block my-0 lg:ml-3 md:ml-4 ml-5 mr-0 py-1 px-4 md:px-2 text-color-three hover:text-color-eight font-bold rounded-lg bg-color-eight hover:bg-color-three border-2 hover:border-color-eight"
      >
        Post Job
      </button>
    </div>
  );
}

export default NavBar;
