/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FormContext } from "../../../contexts/form";

function Text({ title, att }) {
  const { form, addAttribute } = useContext(FormContext);
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
    addAttribute(att, e.target.value);
  };
  return (
    <div>
      <div>{title}</div>
      <input value={content} onChange={handleChange} />
      {/* <div>{form[att]}</div> */}
    </div>
  );
}

export default Text;
