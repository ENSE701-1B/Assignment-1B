import React, { Component } from "react";
import "../App.css";

class home extends Component {
  //function click link to search
  clickToSearchPage() {
    window.location.href = "/articleSearch";
  }

  clickToSubmit() {
    window.location.href = "/submit";
  }
  render() {
    return (
      <div className="home">
        <div className="navbar">
          <ul className="navlist">
            {/*link to home page*/}
            <li className="navbtn">
              <a href="/">Return to Home Page</a>
            </li>
            <li className="navbtn">
              <a href="/admin">Admin</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <h1 className="title">Welcome to Article Searching System</h1>
          <h2 className="header">Software Practice Empirical Evidence Database (SPEED)</h2>
          <br />
          <div className="buttons">
            {/*link to search page*/}
            <button className="btn" onClick={this.clickToSearchPage.bind(this)}>
              <p>Start to Search</p>
            </button>
            <button className="btn" onClick={this.clickToSubmit.bind(this)}>
              <p>Start to Submit</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default home;