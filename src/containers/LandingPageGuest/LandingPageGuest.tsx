import React from "react";
import "./LandingPageGuest.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "components/Logo/Logo";
import SearchBarGuest from "components/SearchBarGuest/SearchBarGuest";
import JobSummary from "components/JobSummary/JobSummary";
import JobDescription from "components/JobDescription/JobDescription";
import Circles from "components/Circles/Circles";
import QuickLinksGroup from "components/QuickLinksGroup/QuickLinksGroup";

function LandingPageGuest() {
  const jobConditions: string[] = ["Remote", "Part Remote", "On-Premise"];

  return (
    <div className="container">
      <header className="top-section">
        <div className="top-bar">
          <Logo />
          <div className="nav-bar">
            <ul className="nav-group">
              <li className="nav-item">
                <a className="nav-link">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Company Review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Find Salaries</a>
              </li>
            </ul>
            <button className="nav-btn">Post Job</button>
          </div>
        </div>
        <h1 className="title">Find Your Dream Job</h1>
        <Circles />
      </header>
      <SearchBarGuest />
      <section className="middle-section">
        <div className="search-results">
          <span className="search-results-txt">Showing {68} results</span>
          <div className="search-results-box">
            <label htmlFor="search-results">Sort by:</label>
            <select
              id="search-results"
              name="search-results"
              className="search-results-options"
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
        <div className="job-list">
          <div className="job-summary">
            <JobSummary />
          </div>
          <div className="job-description">
            <JobDescription />
          </div>
        </div>
        <div className="pagination"></div>
      </section>
      <footer className="footer">
        <div className="copyright">
          <Logo />
          <p className="copyright-text">
            ️ ©️ 2021 <span className="copyright-text-italics">FindJobs</span>
          </p>
        </div>
        <div className="quick-links">
          <QuickLinksGroup />
          <QuickLinksGroup />
        </div>
        <div className="social-media">
          <span className="social-media-text">Social Media</span>
          <div className="social-media-icons">
            <div className="sm-icons-container">
              <FontAwesomeIcon icon={faInstagram} className="sm-icons" />
            </div>
            <div className="sm-icons-container">
              <FontAwesomeIcon icon={faFacebookF} className="sm-icons" />
            </div>
            <div className="sm-icons-container">
              <FontAwesomeIcon icon={faTwitter} className="sm-icons" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageGuest;
