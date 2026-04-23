import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/feature/authSlice";

const Register = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-[90.7vh] flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            value={phone}
            onChange={handleChange}
            name="phone"
            type="phone"
            placeholder="Enter Phone Number"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition">
            Register
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
