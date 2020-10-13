import React, { Component } from "react";


class Box extends Component {
  render() {
    return (
      <div className="outter">
        <h1>See your weather</h1>
        <div className="box">
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            alt="icon"
          />
          <h2>{this.props.cityName}</h2>
          <h4>Current temperature: {Math.floor(this.props.temp.temp)} °C</h4>
          <h4>Max temperature: {Math.floor(this.props.temp.temp_max)} °C</h4>
          <h4>Min temperature: {Math.floor(this.props.temp.temp_min)} °C</h4>
          <button className="btn" onClick={this.props.handleClick}>Go back</button>
        </div>
      </div>
    );
  }
}

export default Box;

// {/* <div className="outter">
// <h1>See your weather</h1>
// <div className="box">
//   <img className="icon" src={this.props.icon} alt="icon"></img>
//   <h4>{this.props.cityName}</h4>
//   <h4>Current temperature: {this.props.temp.temp}</h4>
//   <h4>Max temperature: {this.props.temp.temp_max}</h4>
//   <h4>Min temperature: {this.props.temp.temp_min}</h4>
//   <Search
//     handleSubmit={this.props.handleSubmit}
//     handleChange={this.props.handleChange}
//   />
// </div>
// </div> */}
