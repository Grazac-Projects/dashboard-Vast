import React from "react";
import "./ListHeader.css";
const ListHeader = ({ listType }) => {
  return (
    <div className="listheader">
      <h3 className="listeach">{listType}</h3>
      <p className="view">View All</p>
    </div>
  );
};

export default ListHeader;
