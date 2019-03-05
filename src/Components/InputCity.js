import React from "react";
import { Input } from "semantic-ui-react";

const InputCity = props => (
  <form onSubmit={props.showWeather}>
    <Input
      type="text"
      name="city"
      action="Show Weather"
      placeholder="Enter the city..."
    />
  </form>
);

export default InputCity;
