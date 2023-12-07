import React, { useState } from "react";
import classes from "./dashboard.module.css";
import Navbar from "./navbar/navbar";
import Sidebar from "../sidebar/sidebar";

const DashboardContainer = ({ toggleSidebar, sidebarVisible }) => {
  return (
    <div className={`${classes.wrap} d-flex`}>
      <Sidebar visible={sidebarVisible} />
      <main className={classes.main} style={{ width: !sidebarVisible && `20000vw` }}>
        <Navbar toggleSidebar={toggleSidebar} />
        <h3>Main</h3>
      </main>
    </div>
  );
};

const Dashboard = ({ loggedIn }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div>
      <DashboardContainer toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
    </div>
  );
};

export default Dashboard;