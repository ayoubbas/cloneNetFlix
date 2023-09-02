import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/contextAuth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  signUp } = useAuth();
  const navigate = useNavigate();
  const hundleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/e21ad84f-f8ce-49c5-904c-869a79454747/MA-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={hundleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="my-2 p-3 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="my-2 p-3 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 my-6 py-3 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">
                  Already subscribe to Netflix?{" "}
                </span>{" "}
                <Link to={"/login"}> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
