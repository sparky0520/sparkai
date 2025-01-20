/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pp from "../assets/pp.jpg";

function Home() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="flex flex-col h-full w-full">
      {/* Sidebar */}
      <div
        className={`bg-blue-500 flex flex-col absolute top-0 ${
          sidebar ? "left-[0%]" : "left-[-60%]"
        } h-full w-[60%] z-10`}
      >
        <div onClick={toggleSidebar}>close sidebar</div>
        {/* New chat button */}
        <div>New Chat</div>
        {/* Prev chats */}
        <ul className="flex-1 overflow-scroll">
          <li>ABC</li>
          <li>DEF</li>
          <li>GHI</li>
          <li>JKL</li>
          <li>MNO</li>
          <li>PQR</li>
          <li>STU</li>
          <li>VWX</li>
          <li>YZ</li>
        </ul>
        <div>
          <img src={pp} className="inline" />
          <span>User1</span>
        </div>
      </div>
      <div className="flex justify-between w-full bg-green-500">
        <div onClick={toggleSidebar}>open sidebar</div>
        <div>sparkAi</div>
        <div></div>
      </div>
      {/* Chat content */}
      <div className="flex-1 overflow-scroll">Chat Content</div>
      {/* Input bar */}
      <div className="flex justify-center gap-2 w-full bg-black ">
        <input className="overflow-y-scroll" />
        <button>send</button>
      </div>
    </div>
  );
}

export default Home;
