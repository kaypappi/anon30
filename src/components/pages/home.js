import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="center links">
          <div className="row">
            <div className="col s6">
              <Link to={'/signup'} class="btn bg-info text-white">Join</Link>
            </div>
            <div className="col s6">
              <Link to={'/signin'} class="btn bg-info text-white">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
