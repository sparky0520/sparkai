/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { FormContext } from "../../../contexts/form";

function Selection({ title, att, options }) {
  const { form, addAttribute } = useContext(FormContext);
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
    addAttribute(att, e.target.value);
  };
  return (
    <div>
      <div>{title}</div>
      <select value={selected} onChange={handleChange} name={att}>
        {options.map((value, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
      {/* <div>{form[att]}</div> dynamic key att */}
    </div>
  );
}

export default Selection;
