import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  const temp = "/use";
  return (
    <div className="sidebar">
      <div className="side__navbar">
        <ul>
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={temp + "1"}
            >
              <span className="use1"> U.S. 1.3</span>
              <span className="sprint">Sprint1</span>
            </Link>
          </li>

          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/use2"
            >
              U.S. 2.1 -2.2
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/use3"
            >
            U.S. 3.5
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/use4"
            >
             U.S. 4.5
            </Link>
          </li>
          <li>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/use5"
            ></Link>
          </li>
        </ul>
      </div>
     <div className="sidebar__mediaIcon">
  <button className="ui circular facebook icon button">
    <i className="facebook icon" />
  </button>
  <button className="ui circular twitter icon button">
    <i className="twitter icon" />
  </button>
  <button className="ui circular linkedin icon button">
    <i className="linkedin icon" />
  </button>
  <button className="ui circular google plus icon button">
    <i className="google plus icon" />
  </button>
</div>

    </div>
  );
}

export default Sidebar;
