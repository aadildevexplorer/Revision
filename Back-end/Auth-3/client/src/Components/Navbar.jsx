import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link to={"/home"} className="text-2xl font-bold">
        Logo
      </Link>

      <div className="flex gap-6">
        {user ? (
          <>
            <Link
              onClick={handleLogOut}
              className="hover:text-yellow-400 transition"
            >
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-yellow-400 transition">
              Login
            </Link>

            <Link to="/register" className="hover:text-yellow-400 transition">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
