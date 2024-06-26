import React from "react";
import "./SideBar.css";
import AddBook from "./AddBook";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">BMS</div>
      <div>
        <p className="sidebar-item">Books</p>
        <p className="sidebar-item">User</p>
      </div>
      {/* <AddBook /> */}
    </div>
  );
};

export default SideBar;