import React from "react";

import JobApplicationForm from "./containers/JobApplicationForm";
import JobCreationForm from "./containers/JobCreationForm";
import LandingPageAdmin from "./containers/LandingPageAdmin";
import LandingPageGuest from "./containers/LandingPageGuest";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <div className="flex flex-row justify-center items-center">
      <LandingPageAdmin />
    </div>
  );
}

export default App;
