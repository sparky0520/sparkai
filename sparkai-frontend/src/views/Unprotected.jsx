/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";

function Unprotected() {
  return (
    <Routes>
      <Route path="/login" element={Login} />
      <Route path="/signup" element={Signup} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Unprotected;
