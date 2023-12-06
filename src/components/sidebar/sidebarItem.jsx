// SidebarItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
import classes from "./sidebar.module.css"

const SidebarItem = ({ icon, url, name, dropdownItems }) => {
  if (dropdownItems && dropdownItems.length > 0) {
    return (
      <li className={classes.navItem}>
        <Dropdown>
          <Dropdown.Toggle variant="light" id={`dropdown-${name.replace(" ", "-").toLowerCase()}`} >
            <span>{icon}</span>
            <span>{name}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className={classes.dropdown}>
            {dropdownItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.dropdownItems ? (
                  <SidebarItemDropdown icon={item.icon} name={item.name} dropdownItems={item.dropdownItems} />
                ) : (
                    <Dropdown.Item as={Link} to={item.url} className={classes.navItem}>
                    {item.name}
                  </Dropdown.Item>
                )}
              </React.Fragment>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    );
  }

  return (
    <li className={classes.navItem}>
      <Link to={url}>
        <span>{icon}</span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

const SidebarItemDropdown = ({ icon, name, dropdownItems }) => (
  <DropdownSubmenu title={`${name}`}>
    {dropdownItems.map((item, index) => (
      <React.Fragment key={index}>
        {item.dropdownItems ? (
          <SidebarItemDropdown icon={item.icon} name={item.name} dropdownItems={item.dropdownItems} />
        ) : (
          <Dropdown.Item as={Link} to={item.url}>
            {item.name}
          </Dropdown.Item>
        )}
      </React.Fragment>
    ))}
  </DropdownSubmenu>
);

export default SidebarItem;
