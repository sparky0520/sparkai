/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Unprotected() {
  return (
    <Routes>
      <Route path="/" element={Login} />
      <Route path="/signup" element={Signup} />
    </Routes>
  );
}

export default Unprotected;
