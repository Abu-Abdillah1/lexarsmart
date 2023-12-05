import React from "react";


export default function Dashboard({ loggedIn }) {
  return (
    <div>
      {loggedIn ? <h2>Dashboard</h2> : <h2>Please login to access this page</h2>}
    </div>
  )
}