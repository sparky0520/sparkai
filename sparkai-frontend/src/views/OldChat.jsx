/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

function OldChat() {
  const { id } = useParams();
  return <div>OldChat</div>;
}

export default OldChat;
