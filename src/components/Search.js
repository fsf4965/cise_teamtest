import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Search extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="container">
                    <br/>
                    <h2 className="header">Search</h2>

                    <Link to="/">Homepage</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            </div>
        );
    }
  }
export default Search;