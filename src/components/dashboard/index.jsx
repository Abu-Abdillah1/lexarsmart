import React, { useState} from "react";
import classes from "./dashboard.module.css";
import Navbar from "./navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Main from "./main";
import Territory from "./territory/Territory";

const DashboardContainer = ({ toggleSidebar, sidebarVisible }) => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleLinkClick = (component) => {
    // Close the sidebar when a link is clicked
    // You can add additional logic here if needed
    console.log(component)
    toggleSidebar();
    setActiveComponent(component);
  };
  // console.log(activeComponent)

  return (
    <div className={`${classes.wrap} d-flex`}>
      <Sidebar visible={sidebarVisible} setSidebarVisible={toggleSidebar} onLinkClick={handleLinkClick} />
      <main className={classes.main} style={{width: !sidebarVisible && `100vw`,position: !sidebarVisible && 'absolute'}}>
        <Navbar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
        <div className={classes.content}>
          {activeComponent === "dashboard" && <Main />}
          {activeComponent === "territory" && <Territory />}
        </div>
        <div className={classes.footer}>
          2023 &copy; Lexarsmart
        </div>
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