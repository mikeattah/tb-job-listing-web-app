function Circles({ ...props }) {
  return (
    <div className="absolute top-12 right-12 h-40 w-60 flex fex-row justify-between items-center rotate-[-45deg]">
      <div className="h-9 w-9 border-[3px] border-color-one rounded-full"></div>
      <div className="h-9 w-9 border-[3px] border-color-two rounded-full"></div>
      <div className="h-28 w-28 border-[4px] border-color-one rounded-full"></div>
    </div>
  );
}

export default Circles;
