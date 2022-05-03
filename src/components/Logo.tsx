import React from "react";

function Logo({ ...props }) {
  const { position, show } = props;
  return (
    <div
      className={`${position} top-2 left-[25px] md:left-[50px] lg:left-[75px] text-color-four`}
    >
      <p className="rotate-[-5deg] font-pri text-[36px] text-color-four m-0 p-0">
        FindJobs
      </p>
      <p
        className={`italic text-white text-[20px] mt-[-10px] mb-0 mx-0 py-0 pr-0 pl-4 ${show}`}
      >
        for employers
      </p>
    </div>
  );
}

export default Logo;
