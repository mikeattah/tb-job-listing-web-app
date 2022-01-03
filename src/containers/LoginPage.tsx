import React from "react";

import Logo from "components/Logo";
import FormInputOne from "components/FormInputOne";
import Circles from "components/Circles";

function LoginPage() {
  return (
    <div className="h-[1000px] md:h-screen w-screen flex flex-col md:flex-row justify-center items-center m-0 p-0">
      <div className="h-[60%] md:h-full w-full md:w-[45%] flex flex-col justify-end lg:justify-center xl:justify-end items-start md:items-evenly lg:items-start m-0 pt-0 pb-[5px] md:pb-[375px] lg:pb-[175px] xl:pb-[125px] pr-0 pl-[25px] md:pl-[50px] lg:pl-[75px] bg-color-three">
        <Logo position="absolute" show="block" />
        <h1 className="text-white font-bold text-[30px] lg:text-[40px] text-left leading-[2.75rem] m-0 pt-0 lg:pt-[175px] xl:pt-0 pb-0 px-0">
          Find the best <br /> candidates for your <br /> organisation.
        </h1>
        <img
          src={require("../assets/images/7566-removebg-preview-1.png")}
          alt="Two people sitting at a table"
          className=""
        />
      </div>
      <div className="h-1/20 md:h-full w-full md:w-1/10 bg-gradient-to-r from-color-three via-color-five to-color-six"></div>
      <div className="h-[35%] md:h-full w-full md:w-[45%] flex flex-col justify-between md:justify-end lg:justify-center xl:justify-end items-start m-0 pt-0 pb-[175px] md:pb-[375px] lg:pb-[175px] px-[30px] lg:px-[75px] bg-color-six">
        <Circles />
        <h3 className="text-[24px] text-color-three font-bold mt-[10px] md:mt-0 mb-0 md:mb-[10px] mx-0 p-0">
          Login
        </h3>
        <form className="h-[30%] lg:h-[42%] w-full flex flex-col justify-center lg:justify-evenly items-start">
          <FormInputOne title="Email" name="email" type="email" />
          <FormInputOne title="Password" name="password" type="password" />
          <div className="h-1/5 w-full flex flex-row justify-center md:justify-start items-start lg:items-center mt-[40px] mb-0 mx-0 p-0">
            <input
              type="submit"
              value="Login"
              className="w-full md:w-[135px] text-white font-medium bg-color-three m-0 py-[13px] px-0 border-0 rounded-[10px] hover:cursor-pointer hover:bg-color-three-9"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
