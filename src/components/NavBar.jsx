import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../contexts/contextAuth";

const NavBar = () => {
  const { user, logOut} = useAuth();
  const navigate = useNavigate()

  const handleOut = async (e)=>{
    try {
    await logOut()
    navigate("/")
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100]  w-full cursor-pointer absolute">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl ">NEFLIX</h1>
      </Link>
     {user?.email ?  <div>
        <Link to={"/account"}>
          <button className="text-white pr-4 font-bold">Account</button>
        </Link>
          <button onClick={handleOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white font-bold">
            Log Out
          </button>
      </div> :  <div>
        <Link to={"/login"}>
          <button className="text-white pr-4 font-bold">Sign In</button>
        </Link>
        <Link to={"/signup"}>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white font-bold">
            Sign Up
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default NavBar;
