import React from "react";
import classes from "./sidebar.module.css"
import { FaChartPie, FaHome, FaMapMarked, FaServer, FaTasks, FaUserFriends, FaUsers, FaWrench } from "react-icons/fa";
import SidebarItem from "./sidebarItem";
import Logo from "./logo.png" 


export default function Sidebar() {
  const navItems = [
    { icon: <FaHome />, url: "/dashboard", name: "Dashboard" },
    { icon: <FaMapMarked />, url: "/territory", name: "Territory" },
    { icon: <FaTasks />, url: "/todo", name: "Todo" },
    {
      icon: <FaServer/>,
      url: "/leads",
      name: "Leads",
      dropdownItems: [
        { url: "/import", name: "Import" },
        { url: "/import", name: "History" },
      ],
    },
    {
      icon: <FaChartPie />,
      url: "/reports",
      name: "Reports",
      dropdownItems: [
        { url: "/pins", name: "Manage Pins" },
        { url: "/proposals", name: "Proposals" },
        { url: "/activity", name: "Activity" },
      ],
    },
    { icon: <FaUsers />, url: "/users", name: "Users" },
    { icon: <FaUserFriends />, url: "/teams", name: "Manage Teams" },
    {
      icon: <FaWrench />,
      url: "/configuration",
      name: "Configuration",
      dropdownItems: [
        { url: "/pins", name: "Pins" },
        { url: "/tags", name: "Tags" },
        {
          url: "/inventory",
          name: "Inventory",
          dropdownItems: [
            { url: "/products", name: "Products" },
            { url: "/kits", name: "Kits" },
          ]
        },
        { url: "/services", name: "Services" },
        { url: "/contract", name: "Contract Terms" },
        { url: "/details", name: "Company Details" },
        { url: "/leaderboard", name: "Leaderboard" },
        { url: "/integration", name: "Integration" },
      ],
    },
    // Add more sidebar items as needed
  ];
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={Logo} alt="Site Logo" />
      </div>
      <div>
        <ul>
          {navItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              url={item.url}
              name={item.name}
              dropdownItems={item.dropdownItems}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}