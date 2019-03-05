import React, { Component } from "react";
import InputCity from "./Components/InputCity";
import Weather from "./Components/Weather";

import "./App.css";

const apiKey = "b7b1efccbab35930028771afa7d67a08";
let city = "Shkoder";

class App extends Component {
  constructor(props) {
    super(props);
    this.showWeather = this.showWeather.bind(this);
    this.state = {
      location: undefined,
      desc: undefined,
      string: undefined,
      details: undefined,
      icon: undefined,
      humidity: undefined,
      feelsLike: undefined,
      dewpoint: undefined,
      wind: undefined
    };
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    )
      .then(response => response.json())
      .then(weather => {
        this.setState({
          location: weather.name,
          desc: weather.weather[0].main,
          string: weather.main.temp,
          icon: weather.weather[0].icon,
          humidity: weather.main.humidity,
          feelsLike: weather.main.temp_max,
          dewpoint: weather.main.temp_min,
          wind: weather.wind.speed
        });
      });
  }

  showWeather = e => {
    e.preventDefault();
    city = e.target.city.value;
  };

  componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    return (
      <div className="App">
        <InputCity showWeather={this.showWeather} />
        <Weather location={this.state.location} temp={this.state.string} />
      </div>
    );
  }
}

export default App;
