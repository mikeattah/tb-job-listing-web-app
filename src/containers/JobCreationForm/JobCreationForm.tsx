import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from "@fortawesome/free-regular-svg-icons";
import "./JobCreationForm.css";
import FormInputTwo from "components/FormInputTwo/FormInputTwo";
import FormInputThree from "components/FormInputThree/FormInputThree";

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
    <div className="container">
      <div className="close">
        <FontAwesomeIcon icon={faTimes} className="close-ico" />
      </div>
      <div className="title-container">
        <h2 className="page-title">New Job</h2>
        <p className="sub-text">
          Kindly provide the required information to get matched with suitable
          candidates.
        </p>
      </div>
      <form className="form-container">
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
        <div className="form-submit">
          <input
            type="submit"
            value="Submit Application"
            className="form-submit-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default JobCreationForm;
