import React, { Component } from 'react';
import '../App.css';



class advanceSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleButtonClicked() {
        var searchQuery = this.state.searchQuery;
    
        window.location.href = "/search" + searchQuery;
    }
    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
      }
    render() {
        return (

            <div className="home">
                <div className="navbar">
                    <ul className="navlist">
                        <li className="navbtn"><a href="/">Home</a></li>
                        <li className="navbtn"><a href="/search">Browse Articles</a></li>
                        <li className="navbtn"><a href="/AdvancedSearch">Advance Search</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Articles</h2>   
                    <h2 className="header">Advance Search</h2>                 
                    <div className="buttons">
                    <form>
                        <input type="text" className="textbox" name="search" value={this.state.searchQuery}/>
                        <div className="buttons">
                        <input name="submit" className="btn" type = "button" onClick={this.handleButtonClicked.bind(this)} value = "Search"/>
                        </div>
                    </form>
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
export default advanceSearch;
