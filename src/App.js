import React, { Component } from "react";
import InputCity from "./Components/InputCity";
import Weather from "./Components/Weather";
import { Grid, Header, Message } from "semantic-ui-react";

import "./App.css";

const apiKey = "b7b1efccbab35930028771afa7d67a08";
let city = "Shkoder";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: undefined,
      country: undefined,
      temp: undefined,
      icon: undefined,
      desc: undefined,
      maxTemp: undefined,
      minTemp: undefined,
      humidity: undefined,
      pressure: undefined,
      wind: undefined,
      flag: undefined,
      cod: undefined
    };
  }

  getWeather = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    )
      .then(response => response.json())
      .then(weather => {
        if (weather.cod === 200) {
          this.setState({
            cod: weather.cod,
            location: weather.name,
            country: weather.sys.country,
            temp: weather.main.temp.toFixed(),
            icon: `http://openweathermap.org/img/w/${
              weather.weather[0].icon
            }.png`,
            desc: weather.weather[0].description,
            maxTemp: weather.main.temp_max.toFixed(),
            minTemp: weather.main.temp_min.toFixed(),
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            wind: weather.wind.speed,
            flag: weather.sys.country.toLowerCase()
          });
        } else {
          this.setState({
            cod: weather.cod
          });
        }
      });
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  showWeather = e => {
    e.preventDefault();
    city = e.target.city.value;
    this.getWeather();
    e.target.city.value = "";
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const {
      location,
      country,
      temp,
      icon,
      desc,
      maxTemp,
      minTemp,
      humidity,
      pressure,
      wind,
      flag,
      cod
    } = this.state;

    return (
      <div className="App">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 650 }}>
            <Header as="h1" color="teal" textAlign="center">
              Show Weather App
            </Header>
            <InputCity
              showWeather={this.showWeather}
              handleChange={this.handleChange}
            />
            <div className="weather">
              <Weather
                location={location}
                country={country}
                temp={temp}
                icon={icon}
                desc={desc}
                maxTemp={maxTemp}
                minTemp={minTemp}
                humidity={humidity}
                pressure={pressure}
                wind={wind}
                flag={flag}
                cod={cod}
              />
            </div>
            <Message>
              Build by <a href="http://github.com/eriuni">ERIUNI</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
