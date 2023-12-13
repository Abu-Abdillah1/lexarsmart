import React from "react";
import classes from "./territory.module.css"

export default function TerritoryTop(){
    return(
        <div className={classes.tools}>
            <select name="tools" id="tools">
                <option value="" selected>Tools</option>
                <option value="search">Search</option>
                <option value="path">View Path History</option>
            </select>
        </div>
    )
}