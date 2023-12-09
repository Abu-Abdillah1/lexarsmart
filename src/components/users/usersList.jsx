import React from "react"
import classes from "./users.module.css"
import User from "./profileImage.jpg"
import Next from "./next.png"



export default function Userslist(props) {
  return (
    <li className={classes.listWrap}>
      <div>
        <span style={{backgroundImage: `url(${User})`}}></span>
        <span>Brandon Clyde</span>
      </div>
      <div>Admin <img src={Next} alt="Next" /></div>
    </li>
  )
}