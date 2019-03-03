import React from "react";

const Weather = props => (
  <h1>
    {props.location} : {props.temp} ° C
  </h1>
);

export default Weather;
