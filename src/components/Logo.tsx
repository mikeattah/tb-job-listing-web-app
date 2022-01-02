function Logo({ ...props }) {
  return (
    <div className={`${props.position} top-2 left-[75px] text-color-four`}>
      <p className="rotate-[-5deg] font-pri text-[36px] text-color-four m-0 p-0">
        FindJobs
      </p>
      <p
        className={`italic text-white text-[20px] mt-[-10px] mb-0 mx-0 py-0 pr-0 pl-4 ${props.show}`}
      >
        for employers
      </p>
    </div>
  );
}

export default Logo;
