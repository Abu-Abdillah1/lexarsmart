import React from "react";
import Sidebar from "../sidebar/sidebar";
import classes from "./dashboard.module.css"
import Navbar from "./navbar/navbar";

const DashboardContainer = () => {
  return (
    <div className={`${classes.wrap} d-flex`}>
      <Sidebar />
      <main className={classes.main}>
        <Navbar/> 
        <h3>Main</h3>
      </main>
    </div>
  )
}
export default function Dashboard({ loggedIn }) {
  return (
    <div>
      <DashboardContainer />
    </div>
  )
}