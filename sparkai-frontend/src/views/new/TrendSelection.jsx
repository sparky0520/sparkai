/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { NewChatContext } from "../../contexts/newchat";
import CategorySelect from "../components/new/CategorySelect";
import { Link } from "react-router-dom";

function TrendSelection() {
  const { newChat, addMessage } = useContext(NewChatContext);
  const [hours, setHours] = useState(24);

  // useEffect(() => {
  //   fetch all trends according to new time

  //   return () => {
  //     second;
  //   };
  // }, [hours]);

  return (
    <div>
      <div className="text-2xl">Select Category</div>
      <div>
        <Link to={"/new/chat/123"}>Skip</Link>
        <div>Select time period</div>
        <select
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          name="hours"
        >
          <option value={4}>4 hour</option>
          <option value={24}>24 hours</option>
          <option value={48}>48 hours</option>
          <option value={168}>1 week</option>
        </select>
      </div>
      <div>
        <CategorySelect
          title={"Autos and Vehicles"}
          count={"14"}
          trends={{ data: "Trends Data JSON" }} // pass the trends data here
          onClick={() =>
            addMessage("User", "Autos and Vehicles. Trends Data JSON")
          }
        />
        <CategorySelect
          title={"Autos and Vehicles"}
          count={"14"}
          trends={{ data: "Trends Data JSON" }} // pass the trends data here
        />
        <CategorySelect
          title={"Autos and Vehicles"}
          count={"14"}
          trends={{ data: "Trends Data JSON" }} // pass the trends data here
        />
        <CategorySelect
          title={"Autos and Vehicles"}
          count={"14"}
          trends={{ data: "Trends Data JSON" }} // pass the trends data here
        />
      </div>
      <Link to={"/new/chat/123"}>Chat</Link>
    </div>
  );
}

export default TrendSelection;
