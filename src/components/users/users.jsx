import {React, useState, useEffect} from "react"
import classes from "./users.module.css"
import Equalizer from "./equalizer.png"
import Search from "./magnifying-glass.png"
import Userslist from "./usersList"
import axios from 'axios'
import { PropagateLoader } from "react-spinners";



export default function Users({userObject, token}) {
  const [toggleFilter, setToggleFilter] = useState(false)
  const [filteredValue, setFilteredValue] = useState('all')
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState(null)
  const [filteredUsers, setFilteredUsers] = useState(null)
  const[userId, setUserId]=useState(null)
  const handleOnClickList = (e) => {
    const listId = e.target.getAttribute('id')
    // console.log(listId)
    setUserId(listId)
  }
  // const [users, set]


  // useEffect(() => {
  //   if (userObject) {
  //     // console.log(userObject)
  //     setFirstName(userObject.firstName);
  //     setLastname(userObject.lastName)
  //     setRole(userObject.role)
  //   }
  // }, [userObject]);
  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter)
    console.log(toggleFilter)
  }
  const handleClickFilter = (event) => {
    const clickedItem = event.target.textContent.toLowerCase();
    setFilteredValue(clickedItem)
    setLoading(!loading)
  }
  useEffect(() => {
    if (token) {
      setLoading(!loading)
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

        axios.get('https://lexarsmart.onrender.com/api/v1/users', config)
          .then(response => {
            // console.log(response.data);
            setAllUsers(response.data.data);
            setLoading(!loading);
            // setFilteredUsers(response.data.data)
          })
          .catch(error => {
            console.error('Error:', error);
            setLoading(false);
          });
      if (filteredValue === 'all') {
        setFilteredUsers(allUsers)
      } else {
        const filteredUserList = allUsers.filter(user => user.role === filteredValue);
        setFilteredUsers(filteredUserList);
        setLoading(false);
      }
    }
  }, [token, allUsers, filteredValue, loading]);


  // console.log(allUsers)

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
              <li onClick={handleClickFilter}>User</li>
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
              {filteredUsers && (filteredUsers.map((item) => {
                const fullName = `${item.firstName} ${item.lastName}`;
                return (
                  <Userslist key={item.id} name={fullName} role={item.role} id={item.id} handleOnClickList={handleOnClickList} />
                );
              }))}

              {/* <Userslist name={firstName+ ' '+ lastName} role={role} /> */}
            </ul>
            {loading && <div className={classes.loader}>
              <PropagateLoader color="#636363" />
            </div>}
          </div>
          <button>Invite New User</button>
          <a href="#test">View All Pending Invitations</a>
        </div>
      </div>
    </div>
  )
}