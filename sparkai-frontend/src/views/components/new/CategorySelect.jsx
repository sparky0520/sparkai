/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
function CategorySelect({ title, count, trends }) {
  return (
    <div>
      <div>
        {title} ({count})
      </div>
      <div>{trends.data}</div>
    </div>
  );
}

export default CategorySelect;
