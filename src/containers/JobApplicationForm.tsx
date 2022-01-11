import React, { ChangeEvent, useState, memo, useCallback } from "react";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import FormInputOne from "components/FormInputOne";
import { DropZone } from "components/DropZone";
import UploadFiles from "components/UploadFiles";

import { post } from "services/http";

const JobApplicationForm = memo((job_id: string) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [resume, setResume] = useState<File>();

  // Active state for dropZone
  const [isDropActive, setIsDropActive] = useState(false);
  // create state for dropped files
  const [files, setFiles] = useState<File[]>([]);

  // State for uploaded files
  const [fileUploaded, setFileUploaded] = useState("No file uploaded");
  const [color, setColor] = useState("text-red-500");

  const url = `https://api.jobboard.tedbree.com/v1/jobs/${job_id}/apply`;

  // Handler for dropZone's "onDragStateChange" event
  const onDragStateChange = useCallback((isDragActive: boolean) => {
    setIsDropActive(isDragActive);
  }, []);

  // Handler for dropZone's "onFilesDrop" event
  const onFilesDrop = useCallback((files: File[]) => {
    setFiles(files);
    setFileUploaded(`File uploaded: ${files[0].name} ✔️`);
    setColor("text-color-one");
    setResume(files[0]);
  }, []);

  // Handler for UPloadFile's "onButtonClick" event
  const onButtonClick = useCallback(() => {
    setFiles(files);
    setFileUploaded(`File uploaded: ${files[0].name} ✔️`);
    setColor("text-color-one");
    setResume(files[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Response data type
  type Res = {
    status: string;
    message: string;
    error?: string;
  };

  // Application data type
  type Apply = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    cv: File | undefined;
  };

  const applyForJob: Apply = {
    firstName,
    lastName,
    email,
    phone: phoneNumber,
    location,
    cv: resume,
  };

  const handleSubmit = async () => {
    const res: Res = await post(url, applyForJob);
    alert(res.message || res.error);
  };

  return (
    <div
      className={`h-[1000px] w-[550px] flex flex-col justify-center items-center border-color-three my-[60px] mx-0 py-0 px-[50px] bg-color-six ${classNames(
        "border",
        {
          "border-2": isDropActive,
        }
      )}`}
    >
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
          src={require("../assets/images/location.png")}
          alt="location icon"
          className="my-0 mr-[8px] ml-0 p-0"
        />
        {/* Icons made by https://www.flaticon.com/authors/freepik */}
        <span className="text-color-seven">Ikeja Lagos</span>
      </div>
      <form className="min-h-[850px] w-full flex flex-col justify-between items-center">
        <FormInputOne
          title="First Name"
          type="text"
          name="first-name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
        <FormInputOne
          title="Last Name"
          type="text"
          name="last-name"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
        <FormInputOne
          title="Email Address"
          type="email"
          name="email-address"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
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
        <FormInputOne
          title="Phone Number"
          type="number"
          name="phone-number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        />
        <DropZone
          onDragStateChange={onDragStateChange}
          onFilesDrop={onFilesDrop}
        >
          <UploadFiles
            color={color}
            fileUploaded={fileUploaded}
            onClick={onButtonClick}
          />
        </DropZone>
        <input
          type="submit"
          value="Submit Application"
          className="h-[50px] w-full border-0 text-white font-normal bg-color-three hover:bg-color-three-9 hover:cursor-pointer mt-0 mb-[40px] mx-0 p-0"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
});

export default JobApplicationForm;
