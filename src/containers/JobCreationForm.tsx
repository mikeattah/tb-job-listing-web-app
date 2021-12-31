import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FormInputTwo from "components/FormInputTwo";
import FormInputThree from "components/FormInputThree";

function JobCreationForm() {
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
        <FormInputTwo title="Job Title" type="text" name="job-title" />
        <FormInputTwo title="Company Name" type="text" name="company-name" />
        <FormInputTwo title="Location" type="text" name="location" />
        <FormInputThree
          title="What type of employment is it?"
          name="job-type"
          options={jobTypes}
        />
        <FormInputTwo title="Salary Range" type="text" name="salary-range" />
        <FormInputTwo
          title="Submission Deadline"
          type="date"
          name="submission-deadline"
        />
        <FormInputThree
          title="What type of Sector is this job categorized under?"
          name="job-sector"
          options={jobSectors}
        />
        <input
          type="submit"
          value="Submit Application"
          className="h-[50px] w-full border-0 text-white font-normal bg-color-three hover:bg-color-three-9 hover:cursor-pointer my-[75px] mx-0 p-0"
        />
      </form>
    </div>
  );
}

export default JobCreationForm;
