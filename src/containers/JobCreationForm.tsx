import React, { MouseEventHandler, ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FormInputOne from "components/FormInputOne";
import FormInputTwo from "components/FormInputTwo";

function JobCreationForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [subDeadline, setSubDeadline] = useState("");
  const [jobSector, setJobSector] = useState("");

  const ADD_JOB = gql`
    mutation addJob() {
      addJob {
        id
        title
        location
        salary
        company
        jobType
        jobCategory
        deadline
      }
    }`;

  const jobTypes: string[] = [
    "Full-time",
    "Temporary",
    "Contract",
    "Permanent",
    "Internship",
    "Volunteer",
  ];

  const jobSectors: string[] = [
    "Tech",
    "Health Care",
    "Hospitality",
    "Customer Service",
    "Marketing",
  ];

  const [addJob, { loading, error }] = useMutation(ADD_JOB);

  const handleSubmit = (
    e: MouseEventHandler<HTMLInputElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();

    addJob({
      variables: {
        id: "",
        title: jobTitle,
        location: location,
        salary: salaryRange,
        company: companyName,
        jobType: jobType,
        jobCategory: jobSector,
        deadline: subDeadline,
      },
    });
  };

  return (
    <div className="h-[950px] w-[550px] flex flex-col justify-center items-center border border-color-three my-[60px] mx-0 py-0 px-[50px] bg-color-six">
      <div className="h-[50px] w-full flex flex-row justify-end items-end m-0 p-0">
        <FontAwesomeIcon
          icon={faTimes}
          className="text-color-seven my-0 mr-[-20px] ml-0 p-0 hover:cursor-pointer hover:text-color-three"
        />
      </div>
      <div className="h-[60px] w-full">
        <h2 className="text-[24px] text-color-three font-semibold mt-0 mb-[6px] mx-0 p-0">
          New Job
        </h2>
        <p className="text-[11px] text-color-seven m-0 p-0">
          Kindly provide the required information to get matched with suitable
          candidates.
        </p>
      </div>
      <form className="min-h-[750px] w-full flex flex-col justify-between items-center">
        <FormInputOne
          title="Job Title"
          type="text"
          name="job-title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobTitle(e.target.value)
          }
        />
        <FormInputOne
          title="Company Name"
          type="text"
          name="company-name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
        />
        <FormInputOne
          title="Location"
          type="text"
          name="location"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
        <FormInputTwo
          title="What type of employment is it?"
          name="job-type"
          options={jobTypes}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobType(e.target.value)
          }
        />
        <FormInputOne
          title="Salary Range"
          type="text"
          name="salary-range"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSalaryRange(e.target.value)
          }
        />
        <FormInputOne
          title="Submission Deadline"
          type="date"
          name="submission-deadline"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSubDeadline(e.target.value)
          }
        />
        <FormInputTwo
          title="What type of Sector is this job categorized under?"
          name="job-sector"
          options={jobSectors}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobSector(e.target.value)
          }
        />
        <input
          type="submit"
          value="Submit Application"
          className="h-[50px] w-full border-0 text-white font-normal bg-color-three hover:bg-color-three-9 hover:cursor-pointer my-[75px] mx-0 p-0"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default JobCreationForm;
