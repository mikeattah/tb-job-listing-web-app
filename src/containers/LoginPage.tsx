import React from "react";

import Logo from "components/Logo";
import FormInputOne from "components/FormInputOne";
import Circles from "components/Circles";

function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center m-0 p-0">
      <div className="h-full w-[45%] flex flex-col justify-center items-start m-0 py-0 pr-0 pl-[75px] bg-color-three">
        <Logo position="absolute" show="block" />
        <h1 className="text-white font-bold text-[40px]">
          Find the best <br /> candidates for your <br /> organisation.
        </h1>
        <img
          src="/assets/images/7566-removebg-preview-1.png"
          alt="Two people sitting at a table"
          className=""
        />
      </div>
      <div className="h-full w-1/10 bg-gradient-to-r from-color-three via-color-five to-color-six"></div>
      <div className="h-full w-[45%] flex flex-col justify-end items-start m-0 pt-0 pb-[175px] px-[75px] bg-color-six">
        <Circles />
        <h3 className="text-[24px] text-color-three font-bold">Login</h3>
        <form className="h-[42%] w-full flex flex-col justify-evenly itemms-start">
          <FormInputOne title="Email" name="email" type="email" />
          <FormInputOne title="Password" name="password" type="password" />
          <div className="h-1/5 w-full flex flex-row justify-start items-center mt-[40px] mb-0 mx-0 p-0">
            <input
              type="submit"
              value="Login"
              className="text-white font-medium bg-color-three m-0 py-[13px] px-[45px] border-0 rounded-[10px] hover:cursor-pointer hover:bg-color-three-9"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
