import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./JobApplicationForm.css";
import FormInputTwo from "components/FormInputTwo/FormInputTwo";

function JobApplicationForm() {
  return (
    <div className="container">
      <div className="close">
        <FontAwesomeIcon icon={faTimes} className="close-ico" />
      </div>
      <div className="title">
        <h2 className="title-txt">Front end developer</h2>
      </div>
      <div className="sub-title">
        <img
          src="../assets/images/location.png"
          alt="location icon"
          className="sub-title-img"
        />
        <div className="attr">
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
        <span className="sub-title-txt">Ikeja Lagos</span>
      </div>
      <form className="form-container">
        <FormInputTwo title="First Name" type="text" name="first-name" />
        <FormInputTwo title="Last Name" type="text" name="last-name" />
        <FormInputTwo title="Email Address" type="email" name="email-address" />
        <FormInputTwo title="Location" type="text" name="location" />
        <FormInputTwo title="Phone Number" type="number" name="phone-number" />
        <div className="form-upload">
          <img
            src="../assets/images/cloud-computing.png"
            alt="upload cloud icon"
            className="form-upload-ico"
          />
          <div className="attr">
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
          <p className="form-upload-txt">Drag and drop your CV here</p>
          <p className="form-upload-txt">or</p>
          <button className="form-upload-btn">Browse files</button>
        </div>
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

export default JobApplicationForm;
