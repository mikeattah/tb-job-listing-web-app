import React from "react";

import JobApplicationForm from "./containers/JobApplicationForm"; // complete
import JobCreationForm from "./containers/JobCreationForm"; // complete
import LandingPageAdmin from "./containers/LandingPageAdmin"; // complete
import LandingPageGuest from "./containers/LandingPageGuest"; // mobile jS Comp
import LoginPage from "./containers/LoginPage"; // only strip design left

function App() {
  const isLoggedIn: Boolean = false;

  const addNewJob = () => {
    return <JobCreationForm />;
  };

  const postJob = () => {
    return <LoginPage />;
  };

  const verifyLogin = () => {
    return <LandingPageAdmin addNewJob={addNewJob} />;
  };

  const applyForJob = () => {
    return <JobApplicationForm />;
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <LandingPageGuest />
    </div>
  );
}

export default App;
