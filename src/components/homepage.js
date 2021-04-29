import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

class homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="container">
          <br />
          <h2 className="header">SEEDS</h2>
          <div className="buttons">
            <Link to="/Search">
              <button class="btn search" type="button">
                Search
              </button>{" "}
            </Link>
          </div>
          <br />
          <br />
          <hr />
        </div>
      </div>
    );
  }
}
export default homepage;
