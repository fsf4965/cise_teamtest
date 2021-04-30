import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class loginpage extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="container">
                    <br/>
                    <h2 className="header">Log In</h2>

                    <div className="buttons">
                        <Link to="/Home"><button class="btn login" type="button" >
                        Login
                        </button> </Link>
                    </div>
                </div>
                <br />
                <br />
                <hr />
            </div>
        );
    }
  }
export default loginpage;
