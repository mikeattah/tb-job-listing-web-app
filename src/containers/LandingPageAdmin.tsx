import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import Logo from "components/Logo";
import Circles from "components/Circles";
import SearchBarAdmin from "components/SearchBarAdmin";
import TableTitle from "components/TableTitle";
import TableContent from "components/TableContent";

function LandingPageAdmin() {
  return (
    <div className="">
      <header className="">
        <div className="">
          <Logo />
          <div className="">
            <FontAwesomeIcon icon={faBell} className="" />
            <img src="assets/images/tedbree.png" alt="Tedbree Logo" />
          </div>
        </div>
        <h1 className="">Jobs</h1>
        <Circles />
      </header>
      <section className="">
        <SearchBarAdmin />
        <TableTitle />
        <TableContent />
        <div className=""></div>
      </section>
      <footer className="">
        <div className="">
          <Logo />
          <p className="">
            ️ ©️ 2021 <span className="">FindJobs</span>
          </p>
          <a className="">Terms and condition</a>
        </div>
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
      </footer>
    </div>
  );
}

export default LandingPageAdmin;
