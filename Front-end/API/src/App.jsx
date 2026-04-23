import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Authentication/Components/Navbar";
import Login from "./Authentication/Pages/Login";
import Register from "./Authentication/Pages/Regsiter";
import Home from "./Authentication/Pages/Home";
import MultiStepForm from "./Authentication/Components/MultiStepForm";
import Users from "./Data/Pages/Users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes> */}
        {/* <MultiStepForm /> */}
        <Users />
      </BrowserRouter>
    </>
  );
};

export default App;
