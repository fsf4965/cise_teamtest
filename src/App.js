import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/homepage';
import Search from './components/Search';
import Login from './components/loginpage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/Home' component={Homepage} />
          <Route path='/Search' component={Search} />
          <Route exact path='/' component={Login} />

        </div>
      </Router>
    );
  }
}

export default App;
