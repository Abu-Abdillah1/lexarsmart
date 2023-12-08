
import React from "react";
import Select from "./select/select";
import classes from "./dashboard.module.css"
import User from "./user.png"
import File from "./folder.png"
import CardTemplate from "./cardTemplate/cardTemplate";

const Main = () => {
  return (
    <div className={ classes.mainContainer}>
      <div className={classes.mainWrap}>
        <div className={`${classes.activity}`}>
          <span>
            <h3>Company Activity</h3>
            <Select />
          </span>
          <div className={classes.data}>
            <span>0</span>
            <span>Total Doors Knocked</span>
          </div>
        </div>
        <div className={classes.pinsFile}>
          <div>
            <img src={User} alt="User Icon" />
            <div>
              <span>0 / 1500 Pins</span>
              <span>Imported this month</span>
            </div>
          </div>
          <div>
            <img src={File} alt="User Icon" />
            <div>
              <span>0.00 GB / 1.00 GB</span>
              <span>File Storage Space</span>
            </div>
          </div>
        </div>
        <CardTemplate title="Most Doors Knocked" name="Brandon Clyde" className={classes.third} />
        <CardTemplate title="Top Sales Rep" name="Brandon Clyde" className={classes.fourth} />
        <CardTemplate title="Best Closing Ratio" name="Brandon Clyde" className={classes.fifth} />
        <CardTemplate title="Team Sales Ranking" name="Team 1 Phone" className={classes.sixth} />
      </div>
    </div>
  );
};

export default Main;
