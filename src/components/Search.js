import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

class Search extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="container">
          <br />
          <h2 className="header">Search</h2>
          <div className="buttons">
            <Link to="/">
              <button class="btn homepage" type="button">
                Homepage
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
export default Search;
