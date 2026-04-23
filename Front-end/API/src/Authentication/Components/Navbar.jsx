import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../redux/feature/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to={"/"} className="text-xl font-bold">
        MyApp
      </Link>

      <div className="space-x-6">
        {user ? (
          <button
            onClick={handleLogOut}
            className="hover:text-blue-400 transition bg-white text-black p-1"
          >
            LogOut
          </button>
        ) : (
          <>
            <Link
              to={"/login"}
              className="hover:text-blue-400 transition bg-red-700 p-1"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="hover:text-blue-400 transition bg-red-700 p-1"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
