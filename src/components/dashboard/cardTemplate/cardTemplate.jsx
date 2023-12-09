import {React} from "react"
import classes from "./cardTemplate.module.css"
import Select from "../select/select"
import ProfileImage from "./profileImage.jpg"



export default function CardTemplate(props) {
  
  return (
    <div className={`${classes.container} ${props.className || ''}`}>
      <div className={classes.containerTop}>
        <h3>{props.title}</h3>
        <Select/>
      </div>
      <div className={classes.details}>
        <div className={classes.detailUser}>
          <div style={{backgroundImage: `url(${ProfileImage})`}}></div>
          <div>
            <span>1. { props.name}</span>
            <span>Lexar Smart Home</span>
          </div>
        </div>
        <div>
          0
        </div>
      </div>
      <button className={classes.button}>View More</button>
    </div>
  )
}