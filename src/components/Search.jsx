import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="search">
        <h1>Check your weather here</h1>
          <form onSubmit={this.props.handleSubmit}>
            <input onChange={this.props.handleChange} placeholder="City name" />
            <button className="btn" type="submit">Check!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
