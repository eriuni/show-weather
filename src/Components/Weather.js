import React from 'react';

const Weather = props => (
    <h1>{props.location} : {props.temp}</h1>
)

export default Weather;