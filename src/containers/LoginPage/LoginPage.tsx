import React from "react";
import "./LoginPage.css";

import Logo from "components/Logo/Logo";
import FormInputOne from "components/FormInputOne/FormInputOne";
import Circles from "components/Circles/Circles";

function LoginPage() {
  return (
    <div className="container">
      <div className="left-top">
        <Logo />
        <h1 className="main-title">
          Find the best <br /> candidates for your <br /> organisation.
        </h1>
        <img
          src="assets/images/7566-removebg-preview-1.png"
          alt="Two people sitting at a table"
          className="main-image"
        />
      </div>
      <div className="slant-middle"></div>
      <div className="right-bottom">
        <Circles />
        <h3 className="form-title">Login</h3>
        <form className="login-form">
          <FormInputOne title="Email" name="email" type="email" />
          <FormInputOne title="Password" name="password" type="password" />
          <div className="form-submit">
            <input type="submit" value="Login" className="form-submit-btn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
