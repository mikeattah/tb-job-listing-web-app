import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Jobs } from "./types";
import Logo from "../components/Logo";
import SearchBarGuest from "../components/SearchBarGuest";
import JobSummary from "../components/JobSummary";
import JobDescription from "../components/JobDescription";
import Circles from "../components/Circles";
import QuickLinksGroup from "../components/QuickLinksGroup";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";
import { get } from "../services/http";
import fakeData from "../assets/fake-data.json";

function LandingPageGuest() {
  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState(null);

  // (e) => fetcher(url/{`?q=${e.target.value}`})
  const sortJobs: string[] = ["Latest", "Oldest"];
  const jobTypes: string[] = [
    "Full-time",
    "Temporary",
    "Contract",
    "Permanent",
    "Internship",
    "Volunteer",
  ];
  const jobCategories: string[] = [
    "Tech",
    "Health Care",
    "Hospitality",
    "Customer Service",
    "Marketing",
  ];
  const jobConditions: string[] = ["Remote", "Part Remote", "On-Premise"];

  let pageElements: number = 4;
  let pageCount: number = 5;
  let pageArray: number[] = [];

  useEffect(() => {
    fetch("/jobs")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
      });
  }, []);

  // IIFE to get data from API
  // (async function getData() {
  //   data = await get<Jobs[]>(url);
  // })();

  pageCount = Math.ceil(data.length / pageElements);

  for (let i = 0; i < pageCount; i++) {
    pageArray = [...pageArray, i];
  }

  const handleSeeMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  console.log(data, data.length, pageArray.length);

  return (
    <div className="h-[2500px] md:h-[2695px] lg:h-[2266px] w-screen flex flex-col justify-start items-center font-sec  bg-color-six">
      <header className="h-[450px] md:h-[343px] w-full flex flex-col justify-between items-start bg-color-three m-0 py-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <div className="h-[75px] w-[30px] md:w-full flex flex-row justify-end items-center self-end">
          <Logo position="absolute" show="hidden" />
          <NavBar />
        </div>
        <h1 className="w-full m-0 pt-0 pb-[75px] md:pb-[125px] pl-0 md:pl-[25px] lg:pl-[50px] pr-0 text-white font-normal text-[24px] md:text-[30px] lg:text-[36px] text-center md:text-left">
          Find Your Dream Job
        </h1>
        <Circles />
      </header>
      <SearchBarGuest />
      <section className="h-[1500px] md:h-[2085px] lg:h-[1657px] w-full flex flex-col justify-center items-start m-0 py-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <div className="h-[100px] md:h-[150px] w-full md:w-[40%] lg:w-[48%] text-color-seven flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center font-semibold text-[16px]">
          <span className="">
            Showing {data.length} {`result${data.length > 1 ? "s" : ""}`}
          </span>
          <div className="">
            <label htmlFor="search-results" className="text-color-ten">
              Sort by:
            </label>
            <select
              id="search-results"
              name="search-results"
              className="m-0 py-0 pl-1 lg:pl-2 pr-0 bg-color-six"
              onChange={(e) => console.log(e.target.value)}
            >
              {sortJobs.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-[1200px] md:h-[1785px] lg:h-[1357px] w-full flex flex-col md:flex-row justify-between items-center">
          <div className="h-[325px] md:h-full w-full md:w-[40%] lg:w-[48%] flex flex-col justify-between items-center overflow-y-auto md:overflow-hidden border-none">
            {[...data.slice(pageIndex, pageIndex + pageElements)].map(
              (job: Jobs, index: number) => (
                <JobSummary
                  key={job.id}
                  jobTitle={job.title}
                  salary={job.salary}
                  location={job.location}
                  description={job.description}
                  onSeeMoreClick={handleSeeMoreClick}
                />
              )
            )}
          </div>
          <div className="h-[850px] md:h-full w-full md:w-[56%] lg:w-[48%]">
            <JobDescription
              jobTitle={data[pageIndex].title}
              location={data[pageIndex].location}
              description={data[pageIndex].description}
              benefits={data[pageIndex].benefits}
            />
          </div>
        </div>
        <Pagination
          pageIndex={pageIndex}
          pageElements={pageElements}
          pageArray={pageArray}
          onNumberClick={(value: number) => setPageIndex(value * pageElements)}
          onLeftArrowClick={() => setPageIndex(pageIndex - pageElements)}
          onRightArrowClick={() => setPageIndex(pageIndex + pageElements)}
        />
      </section>
      <footer className="h-[500px] md:h-[266px] w-full flex flex-col md:flex-row justify-center items-center bg-color-three m-0 pt-[25px] md:pt-[50px] pb-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <div className="h-1/4 md:h-full w-full md:w-1/4 flex flex-col justify-center md:justify-start items-center md:items-start">
          <Logo position="static" show="hidden" />
          <p className="text-white mt-[10px] mb-0 mx-0 p-0">
            ??? ????? 2021{" "}
            <span className="font-semibold italic text-color-twelve">
              FindJobs
            </span>
          </p>
        </div>
        <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-row justify-between md:justify-center items-center">
          <QuickLinksGroup />
          <QuickLinksGroup />
        </div>
        <div className="h-1/4 md:h-full w-full md:w-1/4 flex flex-col justify-center md:justify-start items-center m-0 p-0">
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
