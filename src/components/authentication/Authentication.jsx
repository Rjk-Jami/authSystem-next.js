"use client";
import React, { use, useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Authentication = () => {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <div className="container relative bg-white p-8 rounded-lg shadow-md">
      {/* <h1 className="text-3xl font-bold text-center mb-6 z-20 ">Welcome Back!</h1> */}
      <div className="px-8 grid grid-cols-2 justify-center items-center gap-2 mb-4">
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

      <div className="">{loginActive ? <Login /> : <Registration />}</div>
    </div>
  );
};

export default Authentication;
