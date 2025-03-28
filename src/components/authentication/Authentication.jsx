"use client";
import React, { use, useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Authentication = () => {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <div className="container relative">

      <div className="absolute ">
        
      </div>
      <div className="px-8 grid grid-cols-2 justify-center items-center gap-2">
        <button
          onClick={() => setLoginActive(!loginActive)}
          className={`btn btn-outline btn-primary ${
            loginActive ? "btn-active drop-shadow-2xl" : ""
          } `}
        >
          Login
        </button>

        <button
          onClick={() => setLoginActive(!loginActive)}
          className={`btn btn-outline btn-primary ${
            loginActive ? "" : "btn-active drop-shadow-2xl"
          }`}
        >
          Registration
        </button>
      </div>
    
   
      <div className="">
      {loginActive ? <Login /> : <Registration />}
      </div>
    </div>
  );
};

export default Authentication;
