import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import Logo from "components/Logo";
import Circles from "components/Circles";
import SearchBarAdmin from "components/SearchBarAdmin";
import TableTitle from "components/TableTitle";
import TableContent from "components/TableContent";
import Pagination from "components/Pagination";

function LandingPageAdmin() {
  return (
    <div className="h-[1822px] w-screen flex flex-col justify-start items-center font-sec  bg-color-six">
      <header className="h-[275px] w-full flex flex-col justify-between items-start bg-color-three m-0 py-0 px-[75px]">
        <Logo position="absolute" show="block" />
        <div className="h-[75px] w-full flex flex-row justify-end items-center">
          <FontAwesomeIcon
            icon={faBell}
            className="text-color-white-6 text-[25px] my-0 mx-[10px] p-0"
          />
          <img src="assets/images/tedbree.png" alt="Tedbree Logo" />
        </div>
        <h1 className="m-0 pt-0 pb-[75px] px-0 text-white font-semibold font-ter text-[36px] italic">
          Jobs
        </h1>
        <Circles />
      </header>
      <section className="h-[1425px] w-full m-0 py-0 px-[75px]">
        <div className="h-[150px] w-full flex flex-row justify-center items-end mt-0 mb-[25px] mx-0 p-0">
          <SearchBarAdmin />
        </div>
        <div className="h-[1100px] w-full flex flex-col justify-between items-center">
          <TableTitle />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
        </div>
        <Pagination />
      </section>
      <footer className="h-[122px] w-full flex flex-row justify-center items-center bg-color-three m-0 py-0 px-[75px]">
        <div className="h-full w-1/2 flex flex-row justify-start items-center m-0 p-0">
          <Logo position="static" show="hidden" />
          <p className="text-white my-0 ml-[50px] mr-[25px] p-0">
            ️ ©️ 2021{" "}
            <span className="font-semibold italic text-color-twelve">
              FindJobs
            </span>
          </p>
          <a className="text-color-white-6 hover:text-white hover:cursor-pointer my-0 mx-[25px] p-0">
            Terms and condition
          </a>
        </div>
        <div className="h-full w-1/2 flex flex-row justify-end items-center">
          <div className="h-[50px] w-[50px] rounded-full bg-color-white-3 flex flex-row justify-center items-center text-white my-[14px] mx-[7px] p-0 hover:cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="scale-125" />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-color-white-3 flex flex-row justify-center items-center text-white my-[14px] mx-[7px] p-0 hover:cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} className="scale-125" />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-color-white-3 flex flex-row justify-center items-center text-white my-[14px] mx-[7px] p-0 hover:cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} className="scale-125" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageAdmin;
