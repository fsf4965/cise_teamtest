import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class search extends Component {
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
                    <h2 class="title">Articles</h2>                    
                    <div class="buttons">
                    <Link to="/search">
                            <button class="btn search" type="button">Search</button>
                    </Link>
                    </div>
                </div>
            </div>
    );
  }
}
export default search;
