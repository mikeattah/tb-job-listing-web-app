import React, { ChangeEvent, useState } from "react";

import Logo from "components/Logo";
import FormInputOne from "components/FormInputOne";
import Circles from "components/Circles";

// import LoginPageDesign from "./login-irregular-shape.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = "https://api.jobboard.tedbree.com/v1/register";
  const login = "https://api.jobboard.tedbree.com/v1/login";
  const logout = "https://api.jobboard.tedbree.com/v1/logout";

  const handleLogin = () => {
    if (email === "") {
      alert("Please enter your email");
    } else if (password === "") {
      alert("Please enter your password");
    } else {
      data.login.map((user: any, index: number) => {
        if (user.email === email) {
          console.log("login success");
        }

        if (index === data.login.length - 1) {
          alert("login failed");
        }
      });
    }
  };

  return (
    <div className="h-[1000px] md:h-screen lg:h-[1150px] w-screen flex flex-col md:flex-row justify-center items-center m-0 p-0">
      <div className="h-[60%] md:h-full w-full md:w-[45%] flex flex-col justify-end md:justify-center items-start md:items-evenly lg:items-start m-0 pt-0 pb-[250px] pr-0 pl-[25px] md:pl-[50px] lg:pl-[75px] bg-color-three">
        <Logo position="absolute" show="block" />
        <h1 className="text-white font-bold text-[30px] lg:text-[40px] text-left leading-[2.75rem] m-0 pt-0 lg:pt-[175px] xl:pt-0 pb-0 px-0">
          Find the best <br /> candidates for your <br /> organisation.
        </h1>
        <img
          src={require("../assets/images/7566-removebg-preview-1.png")}
          alt="Two people sitting at a table"
          className="mt-[25px]"
        />
      </div>
      <div className="h-1/20 md:h-full w-full md:w-1/10 flex flex-row justify-center items-center">
        <img
          src={require("../assets/images/bell.png")}
          alt="login irregular shape"
          className="h-full w-full"
        />
      </div>
      <div className="h-[35%] md:h-full w-full md:w-[45%] flex flex-col justify-start md:justify-center items-start m-0 pt-0 pb-[200px] px-[30px] lg:px-[75px] bg-color-six">
        <Circles />
        <h3 className="text-[24px] text-color-three font-bold mt-[10px] md:mt-0 mb-[50px] md:mb-[10px] mx-0 p-0">
          Login
        </h3>
        <form className="h-[30%] md:h-[25%] w-full flex flex-col justify-center md:justify-evenly items-start">
          <FormInputOne
            title="Email"
            name="email"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <FormInputOne
            title="Password"
            name="password"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <div className="h-1/5 w-full flex flex-row justify-center md:justify-start items-start lg:items-center mt-[30px] mb-0 mx-0 p-0">
            <input
              type="submit"
              value="Login"
              className="w-full md:w-[135px] text-white font-medium bg-color-three m-0 py-[13px] px-0 border-0 rounded-[10px] hover:cursor-pointer hover:bg-color-three-9"
              onClick={handleLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
