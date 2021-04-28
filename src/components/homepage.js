import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="container">
                    <br/>
                    <h2 className="header">SEEDS</h2>

                    <Link to="/Search"><button type="button">
                    Search
                    </button> </Link>
                    <br />
                    <br />
                    <hr />
                </div>
            </div>
        );
    }
  }
export default homepage;
