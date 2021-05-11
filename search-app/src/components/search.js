import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import entryCard from './entryCard';



class search extends Component {

    constructor(props) {
        super(props);

        this.state = {

            entry: []
        };
    }

    componentDidMount() {
        axios
          .get('http://localhost:8082/api/entries')
          .then(res => {
            this.setState({
                entry: res.data
            })
          })
          .catch(err =>{
            console.log('Error from ShowBookList');
          })
      };

    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
    }

    render() {
        const entry = this.state.entry;
        console.log("Article: " + entry);
        let Articles;

        if(!entry) {
            Articles = "there is no book record!";
          } else {
            Articles = entry.map((entry, i) =>
              <entryCard entry={entry} key={i} />
            );
        }

        return (

            <div className="home">
                <div className="navbar">
                    <ul className="navlist">
                        <li className="navbtn"><a href="/">Home</a></li>
                        <li className="navbtn"><a href="/search">Browse Articles</a></li>
                        <li className="navbtn"><a href="/advancedSearch">Advance Search</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className="title">Articles</h2>
                    <h2 className="header">Basic Title Search</h2>                         
                    <input className="textbox" onChange={this.handleInputChanged.bind(this)} value={this.state.searchQuery}/>
                    <p>{this.state.searchQuery}</p>
                </div>
                <div>
                    {Articles}<p>sadas</p>
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
