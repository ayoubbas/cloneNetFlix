import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100]  w-full cursor-pointer">
      <h1 className="text-red-600 text-4xl ">NEFLIX</h1>
      <div>
        <button className="text-white pr-4 font-bold">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white font-bold">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
