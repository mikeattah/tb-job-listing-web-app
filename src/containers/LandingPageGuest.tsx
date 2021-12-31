import React from "react";

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

function LandingPageGuest() {
  const jobConditions: string[] = ["Remote", "Part Remote", "On-Premise"];

  return (
    <div className="">
      <header className="">
        <div className="">
          <Logo />
          <div className="">
            <ul className="">
              <li className="">
                <a className="">Jobs</a>
              </li>
              <li className="">
                <a className="">Company Review</a>
              </li>
              <li className="">
                <a className="">Find Salaries</a>
              </li>
            </ul>
            <button className="">Post Job</button>
          </div>
        </div>
        <h1 className="">Find Your Dream Job</h1>
        <Circles />
      </header>
      <SearchBarGuest />
      <section className="">
        <div className="">
          <span className="">Showing {68} results</span>
          <div className="">
            <label htmlFor="search-results">Sort by:</label>
            <select id="search-results" name="search-results" className="">
              <option value="All">All</option>
              {jobConditions.map((condition: string, index: number) => (
                <option key={index} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <div className="">
            <JobSummary />
          </div>
          <div className="">
            <JobDescription />
          </div>
        </div>
        <div className=""></div>
      </section>
      <footer className="">
        <div className="">
          <Logo />
          <p className="">
            ️ ©️ 2021 <span className="">FindJobs</span>
          </p>
        </div>
        <div className="">
          <QuickLinksGroup />
          <QuickLinksGroup />
        </div>
        <div className="">
          <span className="">Social Media</span>
          <div className="">
            <div className="">
              <FontAwesomeIcon icon={faInstagram} className="" />
            </div>
            <div className="">
              <FontAwesomeIcon icon={faFacebookF} className="" />
            </div>
            <div className="">
              <FontAwesomeIcon icon={faTwitter} className="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageGuest;
