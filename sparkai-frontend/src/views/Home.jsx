/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pp from "../assets/pp.jpg";
import TrendWidget from "./components/TrendsWidget";
import { Link } from "react-router-dom";

function Home() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="flex flex-col h-[100%]">
      {/* Sidebar */}
      <div
        className={`bg-blue-500 flex flex-col absolute top-0 ${
          sidebar ? "left-[0%]" : "left-[-60%] md:w-[-30%] lg:w-[-30%]"
        } h-full w-[60%] md:w-[30%] lg:w-[30%] z-10`}
      >
        <div onClick={toggleSidebar}>close sidebar</div>
        {/* New chat button */}
        <Link to={"/new"}>
          <button>New chat</button>
        </Link>
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
      {/* Header */}
      <div className="flex justify-between bg-green-500">
        <div onClick={toggleSidebar}>open sidebar</div>
      </div>
      {/* Chat content */}
      <div className="flex-1 overflow-scroll">
        <div>Trending right now</div>
        <div>Trends content</div>
        <div>
          Parse XML from https://trends.google.com/trending/rss?geo=IN to show
          the trends{" "}
        </div>
      </div>
      {/* Input bar */}
      <div className="flex justify-center">
        <Link to={"/new"}>
          <button>New chat</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

// {/* Header */}
// <div className="flex justify-between w-full bg-green-500">
// <div onClick={toggleSidebar}>open sidebar</div>
// <div>sparkAi</div>
// <div></div>
// </div>
// {/* Chat content */}
// <div className="flex-1 overflow-scroll bg-black">Chat Content</div>
// {/* Input bar */}
// <div className="flex justify-center gap-2 w-full bg-black ">
// <input className="overflow-y-scroll" />
// <button>send</button>
// </div>
