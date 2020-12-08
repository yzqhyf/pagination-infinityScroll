import React from "react";

const DropDown = (props) => {
  // console.log(props);
  return (
    <div className="drop-down">
      <select onChange={(e) => props.filter(e)}>
        <option value="ALL">All</option>
        <option value="SORT_BY_NAME">sort by name</option>
        <option value="SORT_BY_PRICE">sort by price</option>
      </select>
    </div>
  );
};

export default DropDown;
