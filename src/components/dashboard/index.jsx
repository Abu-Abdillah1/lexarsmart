import React from "react";
import Sidebar from "../sidebar/sidebar";
import classes from "./dashboard.module.css"

const DashboardContainer = () => {
  return (
    <div className={`${classes.wrap} d-flex`}>
      <Sidebar />
      <main>
        <h3>Main</h3>
      </main>
    </div>
  )
}
export default function Dashboard({ loggedIn }) {
  return (
    <div>
      {loggedIn ? <DashboardContainer/> : <h2>Please login to access this page</h2>}
    </div>
  )
}