// import React from 'react'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";

const Login = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-[86.3vh] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Login </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                onChange={handleChange}
                name="email"
                value={email}
                required
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                required
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-5 text-sm">
            Don't have an account?
            <Link
              to={"/register"}
              className="ml-2 text-blue-600 font-semibold cursor-pointer"
            >
              Register{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
