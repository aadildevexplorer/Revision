import React from "react";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import UserGraph from "./Components/UserGraph";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}

      <UserGraph />
    </>
  );
};

export default App;
