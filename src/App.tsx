import React from "react";

import JobApplicationForm from "./containers/JobApplicationForm"; // complete
import JobCreationForm from "./containers/JobCreationForm"; // complete
import LandingPageAdmin from "./containers/LandingPageAdmin"; // complete
import LandingPageGuest from "./containers/LandingPageGuest"; // mobile jS Comp
import LoginPage from "./containers/LoginPage"; // only strip design left

function App() {
  return (
    <div className="flex flex-row justify-center items-center">
      <LandingPageGuest />
    </div>
  );
}

export default App;
