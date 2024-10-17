import React, { useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

const Dashboard = () => {
  const [OpenSideBarToggle, setOpenSideBarToggle] = useState(false);

  const OpenSideBar = () => {
    setOpenSideBarToggle(!OpenSideBarToggle);
  };
  return (
    <div className="window">
      <Header OpenSideBar={OpenSideBar} />
      <Sidebar
        OpenSideBarToggle={OpenSideBarToggle}
        OpenSideBar={OpenSideBar}
      />
      <Home />
    </div>
  );
};

export default Dashboard;
