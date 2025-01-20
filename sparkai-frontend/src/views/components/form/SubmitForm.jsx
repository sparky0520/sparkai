/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FormContext } from "../../../contexts/form";

function SubmitForm() {
  const { form } = useContext(FormContext);
  return (
    <div>
      <div>Add form to db</div>
      {JSON.stringify(form)}
    </div>
  );
}

export default SubmitForm;
