import React, { Component } from "react";
import Box from "./Box";
import Search from "./Search";
import axios from "axios";
require ("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {},
      searchTerm: "",
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const city = this.state.searchTerm;
    const appId = process.env.REACT_APP_KEY;
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      appId +
      "&units=metric";

    axios
      .get(url)
      .then((res) => {
        this.setState({
          weatherData: res.data,
          isSubmitted:true
        });
      })
      .catch((err) => console.log(err));
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({isSubmitted: false})
  }

  render() {

    return this.state.isSubmitted ? (
      <Box
        icon={this.state.weatherData.weather[0].icon}
        cityName={this.state.weatherData.name}
        temp={this.state.weatherData.main}
        handleClick={e => this.handleClick(e)}
      />
    ) : (
      <Search
        handleSubmit={(e) => this.handleSubmit(e)}
        handleChange={(e) => this.handleChange(e)}
      />
    );
  }
}

export default App;

// const curr_temp = weatherData.main.temp;
//         const max_temp = weatherData.main.temp_max;
//         const min_temp = weatherData.main.temp_min;
//         const cityName = weatherData.name;
