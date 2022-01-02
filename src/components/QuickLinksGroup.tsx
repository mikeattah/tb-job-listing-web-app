function QuickLinksGroup({ ...props }) {
  return (
    <div className="h-full w-1/2">
      <p className="text-white font-semibold">Quick Links</p>
      <ul className="text-color-white-6 list-none">
        <li className="my-2 mx-0 p-0 hover:text-white hover:cursor-pointer">
          <a className="">Home</a>
        </li>
        <li className="my-2 mx-0 p-0 hover:text-white hover:cursor-pointer">
          <a className="">About</a>
        </li>
        <li className="my-2 mx-0 p-0 hover:text-white hover:cursor-pointer">
          <a className="">Calendar</a>
        </li>
        <li className="my-2 mx-0 p-0 hover:text-white hover:cursor-pointer">
          <a className="">Terms and condition</a>
        </li>
      </ul>
    </div>
  );
}

export default QuickLinksGroup;
