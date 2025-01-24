/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";

// create context
export const NewChatContext = createContext();

// create context provider
export const NewChatProvider = ({ children }) => {
  const [newChat, setNewChat] = useState({});
  const addMessage = (sender, message) => {
    setNewChat((prev) => (prev = { ...prev, [sender]: message }));
  };

  return (
    <NewChatContext.Provider value={{ newChat, addMessage }}>
      {children}
    </NewChatContext.Provider>
  );
};
