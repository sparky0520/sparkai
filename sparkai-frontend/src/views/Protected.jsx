/* eslint-disable no-unused-vars */
import React from "react";
import { FormProvider } from "../contexts/form";
import ContentTypeForm from "./ContentTypeForm";
import { Route, Routes } from "react-router-dom";

function Protected() {
  // Check if user is logged in
  // if not then route to unprotected("/auth")
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<ContentTypeForm />} />
      </Routes>
    </FormProvider>
  );
}

export default Protected;
