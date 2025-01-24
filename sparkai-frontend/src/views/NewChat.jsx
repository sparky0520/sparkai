/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import TrendSelection from "./new/TrendSelection";
import OldChat from "./OldChat";
import { NewChatProvider } from "../contexts/newchat";
import NotFound from "./NotFound";

function NewChat() {
  return (
    <NewChatProvider>
      <Routes>
        <Route path="/trendselection" element={<TrendSelection />} />
        <Route path="/chat/:id" element={<OldChat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NewChatProvider>
  );
}

export default NewChat;
