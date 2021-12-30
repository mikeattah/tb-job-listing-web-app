import React from "react";
import "./LandingPageAdmin.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import Logo from "components/Logo/Logo";
import Circles from "components/Circles/Circles";
import SearchBarAdmin from "components/SearchBarAdmin/SearchBarAdmin";
import TableTitle from "components/TableTitle/Tabletitle";
import TableContent from "components/TableContent/TableContent";

function LandingPageAdmin() {
  return (
    <div className="container">
      <header className="top-section">
        <div className="top-bar">
          <Logo />
          <div className="top-info">
            <FontAwesomeIcon icon={faBell} className="top-icon" />
            <img src="assets/images/tedbree.png" alt="Tedbree Logo" />
          </div>
        </div>
        <h1 className="title">Jobs</h1>
        <Circles />
      </header>
      <section className="middle-section">
        <SearchBarAdmin />
        <TableTitle />
        <TableContent />
        <div className="pagination"></div>
      </section>
      <footer className="footer">
        <div className="copyright">
          <Logo />
          <p className="copyright-text">
            ️ ©️ 2021 <span className="copyright-text-italics">FindJobs</span>
          </p>
          <a className="copyright-terms">Terms and condition</a>
        </div>
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
      </footer>
    </div>
  );
}

export default LandingPageAdmin;
