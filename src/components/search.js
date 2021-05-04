import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class search extends Component {
    render() {
        return (
            <div className="home">
                <div className="navbar">
                    <ul className="navlist">
                        <li className="navbtn"><a href="/">Home</a></li>
                        <li className="navbtn"><a href="/search">Browse Articles</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Articles</h2>                    
                    <div className="buttons">
                    <Link to="/search">
                            <button className="btn search" type="button">Search</button>
                    </Link>
                    </div>
                </div>
                <div className="footer">
                    <p className="footertext">Developed by</p>
                    <p className="footertext">Victor Feng | Aaron Gilbert | Gerard Gomez</p>
                </div>
            </div>
    );
  }
}
export default search;
