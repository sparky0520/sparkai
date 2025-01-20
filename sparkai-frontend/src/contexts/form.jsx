/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

// create context
export const FormContext = createContext();

// create provider
export const FormProvider = ({ children }) => {
  const [form, setForm] = useState({});
  const addAttribute = (att, value) => {
    setForm((prev) => (prev = { ...prev, [att]: value }));
  };

  return (
    <FormContext.Provider value={{ form, addAttribute }}>
      {children}
    </FormContext.Provider>
  );
};
