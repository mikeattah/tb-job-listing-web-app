import React from "react";

import JobApplicationForm from "./containers/JobApplicationForm"; // complete
import JobCreationForm from "./containers/JobCreationForm"; // complete
import LandingPageAdmin from "./containers/LandingPageAdmin"; // only images left
import LandingPageGuest from "./containers/LandingPageGuest";
import LoginPage from "./containers/LoginPage"; // images and strip design left

function App() {
  const isLoggedIn: Boolean = false;

  const addNewJob = () => {
    if (isLoggedIn) {
      return <JobCreationForm />;
    } else {
      return <LoginPage />;
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      {(isLoggedIn && <LandingPageAdmin addNewJob={addNewJob} />) || (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
