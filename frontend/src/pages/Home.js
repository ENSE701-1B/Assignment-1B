import axios from "axios";
import React, { Component } from "react";
import env from '../env';
import articles from "../dummydata/articles";

class Home extends Component {
  
  render() {
    
    return (
      <div class="main">
        <h1> ENSE701-Contemporary Issues in Software Engineering</h1>
        <h3>Team Members:</h3>
      <div class="home">

        <div class="card">
            <p>
              Name:JiaXu Li<br></br>
              ID: 18021885<br></br>
              Email:<a href="mailto:hht3280@autuni.ac.nz">hht3280@autuni.ac.nz</a>
            </p>
          </div>

          <div class="card">
            <p>
              Name: JiaLi Lu<br></br>
              ID: 21135614<br></br>
              Email:<a href="mailto:rfp0761@autuni.ac.nz">rfp0761@autuni.ac.nz</a>
            </p>
          </div>
  
          <div class="card">
            <p>
              Name: William Wang<br></br>
              ID: 18017970<br></br>
              Email:<a href="mailto:xwg1585@autuni.ac.nz">xwg1585@autuni.ac.nz</a>
            </p>
          </div>
      
          <div class="card">
            <p>
              Name: RuYang Xu<br></br>
              ID: 18017865<br></br>
              Email:<a href="mailto:jfm7532@autuni.ac.nz">jfm7532@autuni.ac.nz</a>
            </p>
          </div>
    
      </div>

      </div>
    );
  }
}
export default Home;
