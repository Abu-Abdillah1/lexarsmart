import React, { useState, useEffect } from "react";
import classes from "./userPop.module.css"
import Settings from "../equalizer.png"



export default function UserPop(props) {
  const [userDetails, setUserDetails] = useState(null)
  useEffect(() => {
    if (props.userDetails) {
      console.log(props.userDetails)
      setUserDetails(props.userDetails)
    }
  },[userDetails, props.userDetails])
  
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.containerHeader}>
          <div>{userDetails && (userDetails.firstName + ' ' + userDetails.lastName)}</div>
          <div>
            <div>
              <img src={ Settings} alt="Settings" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        This is the user pop for user {props.userId}
      </div>
    </div>
  )
}