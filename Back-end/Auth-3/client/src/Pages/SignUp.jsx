// import React from 'react'

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { registerUser } from "../redux/authSlice";

const SignUp = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
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
    <div className="min-h-[86.3vh] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Register </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              onChange={handleChange}
              name="name"
              value={name}
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

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
            Register
          </button>
        </form>

        <p className="text-center mt-5 text-sm">
          Already have an account?
          <Link
            to={"/"}
            className="ml-2 text-blue-600 font-semibold cursor-pointer"
          >
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
