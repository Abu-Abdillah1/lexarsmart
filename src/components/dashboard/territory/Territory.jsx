import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import classes from './territory.module.css'

const Territory = (props) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);
  console.log(longitude)
  console.log(latitude)

  return (
    <div className={classes.wrapper}>
      {latitude && longitude ? (
        <Map
          google={props.google}
          style={{ width: "100%", height: "70vh" }}
          zoom={10}
          initialCenter={{
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
          }}
        />
      ) : (
        <p>Loading map...</p>
      )}
      {/* Add your Territory component content here */}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCyNfiJB1Wuewp4A4teb0N5rubFiXaYn0w"
})(Territory);
