import React, { useState, useEffect } from "react";
import classes from "./userPop.module.css"
import Settings from "../equalizer.png"
import Close from "./close.png"



export default function UserPop(props) {
  const [userDetails, setUserDetails] = useState(null)
  useEffect(() => {
    if (props.userDetails) {
      console.log(props.userDetails)
      setUserDetails(props.userDetails)
    }
  },[userDetails, props.userDetails])
  const handleToggleUserPop=()=>{
    props.toggleUserPop(false);
  }
  
  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <div className={classes.containerHeader}>
          <div>{userDetails && (userDetails.firstName + ' ' + userDetails.lastName)}</div>
          <div>
            <div>
              <img src={ Settings} alt="Settings" />
            </div>
            <div onClick={handleToggleUserPop}>
              <img src={Close} alt="close" />
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.topContent}>
            <h5>This User is active</h5>
            <div className={classes.toggleProperties}>
              <div>
                <h5>Share Pins With Team </h5>
                <span>
                  <label className={classes.switch}>
                    <input type="checkbox"/>
                    <span className={`${classes.slider} ${classes.round}`}></span>
                  </label>
                </span>
              </div>
              <div>
                <h5>Share Location with Team</h5>
                <span>
                  <label className={classes.switch}>
                    <input type="checkbox"/>
                    <span className={`${classes.slider} ${classes.round}`}></span>
                  </label>
                </span>
              </div>
              <div>
                <h5>Hide Live Location</h5>
                <span>
                  <label className={classes.switch}>
                    <input type="checkbox"/>
                    <span className={`${classes.slider} ${classes.round}`}></span>
                  </label>
                </span>
              </div>
              <div>
                <h5>Suspend User</h5>
                <span>
                  <label className={classes.switch}>
                    <input type="checkbox"/>
                    <span className={`${classes.slider} ${classes.round}`}></span>
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div className={classes.userContent}>
            <div className={classes.profile}>
              <div className={classes.profileImage}>
                <label htmlFor="profileImage">Profile Image</label>
                <input type="file" name="profileImage" id="profileImage" />
                <div></div>
              </div>
              <div className={classes.userRole}>
                <label htmlFor="userRole">User Role *</label>
                <select name="userRole" id="userRole">
                  <option value="user" selected>User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}