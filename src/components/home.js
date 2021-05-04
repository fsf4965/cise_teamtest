import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class home extends Component {
    render() {
        return (
            <div class="home">
                <div class="navbar">
                    <ul class="navlist">
                        <li class="navbtn"><a href="/">Home</a></li>
                        <li class="navbtn"><a href="/search">Browse Articles</a></li>
                    </ul>
                </div>
                <div class="container">
                    <h1 class="title">Home</h1>
                    <h2 class="header">SEEDS</h2>
                    <h3 class="subheader">CISE - Team 21</h3>
                    <div class="buttons">
                        <Link to="/search">
                            <button class="btn search" type="button">Browse Articles</button>
                        </Link>
                    </div>
                </div>
                <div class="footer">
                    <p class="footertext">Developed by</p>
                    <p class="footertext">Victor Feng | Aaron Gilbert | Gerard Gomez</p>
                </div>
            </div>
        );
    }
  }
export default home;
