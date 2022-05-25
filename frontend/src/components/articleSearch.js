import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  //handler for Search Bar
  handleInputSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  onSearch(event){
    event.preventDefault();
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
          onChange={this.handleInputSearch.bind(this)} 
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
