import React from "react";
// import { Link } from "react-router-dom";

import "./ListHeader.css";
const ListHeader = ({ listType, link }) => {
  return (
    <div className='listheader'>
      <h3 className='listeach'>{listType}</h3>
      <p  className='view'>{link}</p>
      {/* <Link to={pathname}>
        view All
      </Link> */}
    </div>
  );
};

export default ListHeader;
