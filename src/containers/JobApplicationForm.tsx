import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FormInputTwo from "components/FormInputTwo";

function JobApplicationForm() {
  return (
    <div className="h-[1000px] w-[550px] flex flex-col justify-center items-center border border-color-three my-[60px] mx-0 py-0 px-[50px] bg-color-six">
      <div className="h-[50px] w-full flex flex-row justify-end items-end m-0 p-0">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-color-seven my-0 mr-[-20px] ml-0 p-0 hover:cursor-pointer hover:text-color-three"
        />
      </div>
      <div className="h-[40px] w-full mt-0 mb-[6px] mx-0 p-0">
        <h2 className="text-[20px] font-semibold text-color-three m-0 p-0">
          Front end developer
        </h2>
      </div>
      <div className="h-[10px] w-full flex flex-row justify-start items-center mt-0 mb-[8px] mx-0 p-0">
        <img
          src="../assets/images/location.png"
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        <div className="hidden">
          {" "}
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
        <span className="text-color-seven">Ikeja Lagos</span>
      </div>
      <form className="min-h-[850px] w-full flex flex-col justify-between items-center">
        <FormInputTwo title="First Name" type="text" name="first-name" />
        <FormInputTwo title="Last Name" type="text" name="last-name" />
        <FormInputTwo title="Email Address" type="email" name="email-address" />
        <FormInputTwo title="Location" type="text" name="location" />
        <FormInputTwo title="Phone Number" type="number" name="phone-number" />
        <div className="h-[250px] w-full flex flex-col justify-center items-center border border-color-three rounded-lg box-border bg-white my-[40px] mx-0 py-[12px] px-[20px]">
          <img
            src="../assets/images/cloud-computing.png"
            alt="upload cloud icon"
            className="my-[5px] mx-0 p-0"
          />
          <div className="hidden">
            {" "}
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/itim2101"
              title="itim2101"
            >
              {" "}
              itim2101{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com'
            </a>
          </div>
          <p className="text-color-three font-semibold my-[5px] mx-0 p-0">
            Drag and drop your CV here
          </p>
          <p className="text-color-three font-semibold my-[5px] mx-0 p-0">or</p>
          <button className="my-[5px] mx-0 py-[9px] px-[20px] text-white font-semibold border-0 rounded-lg bg-color-three hover:bg-color-three-9 hover:cursor-pointer">
            Browse files
          </button>
        </div>
        <input
          type="submit"
          value="Submit Application"
          className="h-[50px] w-full border-0 text-white font-normal bg-color-three hover:bg-color-three-9 hover:cursor-pointer mt-0 mb-[40px] mx-0 p-0"
        />
      </form>
    </div>
  );
}

export default JobApplicationForm;
