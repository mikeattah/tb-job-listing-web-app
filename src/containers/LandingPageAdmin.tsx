import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Jobs, Res, User } from "./types";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Logo from "../components/Logo";
import Circles from "../components/Circles";
import SearchBarAdmin from "../components/SearchBarAdmin";
import TableTitle from "../components/TableTitle";
import TableContent from "../components/TableContent";
import Pagination from "../components/Pagination";
import { get, post, del, patch } from "../services/http";

function LandingPageAdmin({ ...props }) {
  const jobTypes: string[] = [
    "Full-time",
    "Temporary",
    "Contract",
    "Permanent",
    "Internship",
    "Volunteer",
  ];

  const jobsLink = "https://api.jobboard.tedbree.com/v1/my/jobs";
  const userLink = "https://api.jobboard.tedbree.com/v1/my/users";

  let jobs: Jobs[] = [
    {
      id: "",
      title: "",
      company: "",
      company_logo: null,
      location: "",
      category: "",
      salary: "",
      description: "",
      benefits: null,
      type: "",
      work_condition: "",
      created_at: "",
      updated_at: "",
    },
  ];

  let users: User = {
    id: 0,
    name: "",
    avatar: "",
    email: "",
    created_at: "",
    updated_at: "",
  };

  async function getJobs() {
    jobs = await get<Jobs[]>(jobsLink);
  }
  getJobs();

  async function getUsers() {
    users = await get<User>(userLink);
  }
  getUsers();

  const editJob = async (id: string) => {
    const url = `${jobsLink}/${id}`;
    const res = await patch<Res>(url, {
      title: "",
      company: "",
      location: "",
      category: "",
      salary: "",
      description: "",
      benefits: "",
      type: "",
      work_condition: "",
    });
    if (res.status === "success") {
      alert(res.message);
    } else {
      alert(res.error);
    }
  };

  const deleteJob = async (id: string) => {
    const res: Res = await del(`${jobsLink}/${id}`);
    if (res.status === "success") {
      alert(res.message);
    } else {
      alert(res.error);
    }
  };

  return (
    <div className="h-[1944px] lg:h-[1822px] w-screen flex flex-col justify-start items-center font-sec bg-color-six">
      <header className="h-[275px] w-full flex flex-col justify-between items-start bg-color-three m-0 py-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <Logo position="absolute" show="block" />
        <div className="h-[75px] w-full flex flex-row justify-end items-center">
          <FontAwesomeIcon
            icon={faBell}
            className="text-white text-[25px] my-0 mx-[10px] p-0 hover:cursor-pointer"
          />
          <img
            src={require("../assets/images/tedbree.png")}
            alt="Tedbree Logo"
            title="Tedbree Logo"
            className="hover:cursor-pointer"
          />
        </div>
        <h1 className="m-0 pt-0 pb-[75px] px-0 text-white font-semibold font-ter text-[36px] italic">
          Jobs
        </h1>
        <Circles />
      </header>
      <section className="h-[1425px] w-full m-0 py-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <div className="h-[150px] w-full flex flex-row justify-center items-end mt-0 mb-[25px] mx-0 p-0">
          <SearchBarAdmin addNewJob={props.addNewJob()} />
        </div>
        <div className="h-[1100px] w-full flex flex-col justify-start items-center">
          <TableTitle
            name="filter-jobs"
            options={jobTypes}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
          />
          {jobs.map(
            (job: Jobs, index: number) =>
              index < 14 && (
                <TableContent
                  key={job.id}
                  jobTitle={job.title}
                  dateMod={job.updated_at}
                  editJob={editJob(job.id)}
                  deleteJob={deleteJob(job.id)}
                />
              )
          )}
        </div>
        <Pagination />
      </section>
      <footer className="h-[244px] lg:h-[122px] w-full flex flex-col lg:flex-row justify-center items-center bg-color-three m-0 py-0 px-[25px] md:px-[50px] lg:px-[75px]">
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col lg:flex-row justify-between lg:justify-start items-center m-0 p-0">
          <Logo position="static" show="hidden" />
          <p className="text-white my-0 ml-0 lg:ml-[50px] mr-0 lg:mr-[25px] p-0">
            ️ ©️ 2021{" "}
            <span className="font-semibold italic text-color-twelve">
              FindJobs
            </span>
          </p>
          <a className="text-color-white-6 hover:text-white hover:cursor-pointer my-0 mx-0 lg:mx-[25px] p-0">
            Terms and condition
          </a>
        </div>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex flex-row justify-center lg:justify-end items-center">
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
