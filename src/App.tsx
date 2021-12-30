import React from "react";
import "./App.css";

import JobApplicationForm from "./containers/JobApplicationForm/JobApplicationForm";
import JobCreationForm from "./containers/JobCreationForm/JobCreationForm";
import LandingPageAdmin from "./containers/LandingPageAdmin/LandingPageAdmin";
import LandingPageGuest from "./containers/LandingPageGuest/LandingPageGuest";
import LoginPage from "./containers/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <LandingPageAdmin />
    </div>
  );
}

export default App;
