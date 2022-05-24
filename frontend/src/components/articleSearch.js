import React, { Component } from "react";
import "../App.css";

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }
  //handler for Search Bar
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }
  render() {
    return (
      <div className="home">
        <div className="navbar">
          <ul className="navlist">
            <li className="navbtn">
              <a href="/">Return to Homepage</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <h1 className="title">Search an Article</h1>
          <br />
          {/*title lable*/}
          <label>Please Input the Article's Title: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
        </div>
        <div>
            <button className="btn">Search</button>
        </div>
      </div>
    );
  }
}
export default search;