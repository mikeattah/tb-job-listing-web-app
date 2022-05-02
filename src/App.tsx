import React, { useState } from "react";

import JobApplicationForm from "./containers/JobApplicationForm"; // complete
import JobCreationForm from "./containers/JobCreationForm"; // complete
import LandingPageAdmin from "./containers/LandingPageAdmin"; // complete
import LandingPageGuest from "./containers/LandingPageGuest"; // mobile jS Comp
import LoginPage from "./containers/LoginPage"; // only strip design left

function App() {
  const [page, setPage] = useState("landingpageguest");
  return (
    <div className="flex flex-row justify-center items-center">
      {(() => {
        switch (page) {
          case "jobapplicationform":
            return <JobApplicationForm />;
          case "jobcreationform":
            return <JobCreationForm />;
          case "landingpageadmin":
            return <LandingPageAdmin />;
          case "landingpageguest":
            return <LandingPageGuest />;
          case "loginpage":
            return <LoginPage />;
        }
      })()}
    </div>
  );
}

export default App;
