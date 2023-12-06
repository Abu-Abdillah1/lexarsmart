import React, { useState } from "react";
import classes from "./navbar.module.css";
import ProfileImage from "./profileImage.jpg";
import BackgroundImage from "./bg-1.jpg"
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const handleNameClick = () => {
    setIsContainerVisible((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <div>
        <button className={classes.menuButton}>
          <FaBars/>
        </button>
        <div onClick={handleNameClick} className={`${classes.profile} d-flex ${isContainerVisible && classes.active}`}>
          <span>Hi, </span>
          <span>Brandon Clyde</span>
          <div className={classes.profileImage} style={{ backgroundImage: `url(${ProfileImage})` }}></div>
        </div>
        {isContainerVisible && (
          <div className={classes.popContainer} onClick={handleNameClick}>
            <div className={classes.dropdownTop} style={{ backgroundImage: `url(${BackgroundImage})` }}>
              {/* <div style={{ backgroundImage: `url(${ProfileImage})` }}></div> */}
              <img src={ProfileImage} alt="Profile" className={classes.profileImageDropdown} />
              <div>Brandon Clyde</div>
            </div>
            This is the popped container.
          </div>
        )}
      </div>
      <div>
        <h5>Dashboard</h5>
      </div>
    </div>
  );
};

export default Navbar;
