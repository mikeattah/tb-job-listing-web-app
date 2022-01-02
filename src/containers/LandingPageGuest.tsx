import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "components/Logo";
import SearchBarGuest from "components/SearchBarGuest";
import JobSummary from "components/JobSummary";
import JobDescription from "components/JobDescription";
import Circles from "components/Circles";
import QuickLinksGroup from "components/QuickLinksGroup";
import Pagination from "components/Pagination";

function LandingPageGuest() {
  const url = "https://mikeattah.github.io/projects/portfolio.json";

  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

  const { data, error } = fetcher(url);
  console.log(fetcher(url), data, error);

  const jobConditions: string[] = ["Remote", "Part Remote", "On-Premise"];

  return (
    <div className="h-[2266px] w-screen flex flex-col justify-start items-center font-sec  bg-color-six">
      <header className="h-[343px] w-full flex flex-col justify-between items-start bg-color-three m-0 py-0 px-[75px]">
        <div className="h-[75px] w-full">
          <Logo position="absolute" show="hidden" />
          <div className="h-full w-full flex flex-row justify-end items-center m-0 p-0">
            <ul className="flex flex-row justify-end items-center list-none">
              <li className="my-0 mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
                <a className="">Jobs</a>
              </li>
              <li className="my-0 mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
                <a className="">Company Review</a>
              </li>
              <li className="my-0 mx-5 text-color-white-6 hover:text-white hover:cursor-pointer focus:text-white">
                <a className="">Find Salaries</a>
              </li>
            </ul>
            <button className="my-0 ml-5 mr-0 py-1 px-2 text-color-three hover:text-color-eight font-bold rounded-lg bg-color-eight hover:bg-color-three border-2 hover:border-color-eight">
              Post Job
            </button>
          </div>
        </div>
        <h1 className="m-0 pt-0 pb-[125px] pl-[50px] pr-0 text-white font-normal text-[36px]">
          Find Your Dream Job
        </h1>
        <Circles />
      </header>
      <SearchBarGuest />
      <section className="h-[1657px] w-full flex flex-col justify-center items-start m-0 py-0 px-[75px]">
        <div className="h-[150px] w-[45%] text-color-seven flex flex-row justify-between items-center font-semibold">
          <span className="">Showing {68} results</span>
          <div className="">
            <label htmlFor="search-results" className="text-color-ten">
              Sort by:
            </label>
            <select
              id="search-results"
              name="search-results"
              className="m-0 py-0 pl-2 pr-0 bg-color-six"
            >
              <option value="All">All</option>
              {jobConditions.map((condition: string, index: number) => (
                <option key={index} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-[1357px] w-full flex flex-row justify-between items-center">
          <div className="h-full w-[45%] flex flex-col justify-between items-center">
            <JobSummary />
            <JobSummary />
            <JobSummary />
            <JobSummary />
          </div>
          <div className="h-full w-[45%]">
            <JobDescription />
          </div>
        </div>
        <Pagination data={data} />
      </section>
      <footer className="h-[266px] w-full flex flex-row justify-center items-center bg-color-three m-0 pt-[50px] pb-0 px-[75px]">
        <div className="h-full w-1/4 flex flex-col justify-start items-start">
          <Logo position="static" show="hidden" />
          <p className="text-white mt-[10px] mb-0 mx-0 p-0">
            ️ ©️ 2021{" "}
            <span className="font-semibold italic text-color-twelve">
              FindJobs
            </span>
          </p>
        </div>
        <div className="h-full w-1/2 flex flex-row justify-center items-center">
          <QuickLinksGroup />
          <QuickLinksGroup />
        </div>
        <div className="h-full w-1/4 flex flex-col justify-start items-center">
          <span className="text-[24px] text-white font-light m-0 p-0">
            Social Media
          </span>
          <div className="flex flex-row justify-center items-center">
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
        </div>
      </footer>
    </div>
  );
}

export default LandingPageGuest;
