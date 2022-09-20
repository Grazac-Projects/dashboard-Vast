import React from "react";
import { Link } from "react-router-dom";

import "./ListHeader.css";
const ListHeader = ({ listType }) => {
  return (
    <div className="listheader">
      <h3 className="listeach">{listType}</h3>
      <Link to ='/customerViewAll'className="customer-btn">View All</Link>
    </div>
  );
};

export default ListHeader;
