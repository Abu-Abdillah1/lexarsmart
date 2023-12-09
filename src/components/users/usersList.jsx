import React from "react"
import classes from "./users.module.css"
import User from "./profileImage.jpg"
import Next from "./next.png"



export default function Userslist(props) {
  
  return (
    <li className={classes.listWrap} id={props.id} onClick={props.handleOnClickList}>
      <div>
        <span style={{backgroundImage: `url(${User})`}}></span>
        <span>{props.name}</span>
      </div>
      <div>{props.role} <img src={Next} alt="Next" /></div>
    </li>
  )
}