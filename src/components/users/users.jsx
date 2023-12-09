import {React, useState} from "react"
import classes from "./users.module.css"
import Equalizer from "./equalizer.png"
import Search from "./magnifying-glass.png"
import Userslist from "./usersList"


export default function Users() {
  const [toggleFilter, setToggleFilter] = useState(false)
  const [filteredValue, setFilteredValue] = useState('all')
  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter)
    console.log(toggleFilter)
  }
  const handleClickFilter = (event) => {
    const clickedItem = event.target.textContent.toLowerCase();
    setFilteredValue(clickedItem)
  }
  // console.log(filteredValue)
  return (
    <div className={classes.container}>
      <div className={classes.containerTop}>
        <span>Manage Users</span>
        <span onClick={handleToggleFilter}>
          <img src={Equalizer} alt="Settings" />
          {toggleFilter && (
            <ul className={classes.filterList}>
              <li onClick={handleClickFilter}>All</li>
              <li onClick={handleClickFilter}>Users</li>
              <li onClick={handleClickFilter}>Admin</li>
            </ul>
          )}
        </span>
      </div>
      <div className={classes.content}>
        <div className={classes.searchBar}>
          <input type="text" placeholder="Search User" name="search_user" id="search_user" />
          <button>
            <img src={Search} alt="Search" />
          </button>
        </div>
        <div className={classes.userLogs}>
          <div>
            <span>User Limit</span>
            <span>3</span>
          </div>
          <div>
            <span>Active Users</span>
            <span>1</span>
          </div>
          <div>
            <span>Users Remaining</span>
            <span>2</span>
          </div>
        </div>
        <div className={classes.usersList}>
          <div>Active Users</div>
          <div>
            <ul>
              <Userslist/>
            </ul>
          </div>
          <button>Invite New User</button>
          <a href="#test">View All Pending Invitations</a>
        </div>
      </div>
    </div>
  )
}