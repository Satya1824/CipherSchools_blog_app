import React from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { useState } from "react";

const Auth = () => {
  const [isAuth, setIsAuth] = useState("login");
  const handleAuth = () => {
    setIsAuth(isAuth === "login" ? "signup" : "login");
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-[100dvh]">
      <div className="h-[100dvh] md:block hidden overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D"
          alt="Image"
          className="h-full w-full"
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <>
          {isAuth === "login" ? <Login /> : <Signup handleAuth={handleAuth} />}
        </>
        <p className="text-slate-400">
          {isAuth === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="text-secondary font-semibold hover:underline hover:cursor-pointer"
            onClick={handleAuth}
          >
            {isAuth === "login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
