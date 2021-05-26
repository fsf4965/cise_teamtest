import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList_admin from './components/ShowBookList_admin';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookDetails_admin from './components/ShowBookDetails_admin';
import UpdateBookInfo from './components/UpdateBookInfo';
import SearchBookList from './components/SearchBookList';
class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route path='/show-books' component={SearchBookList} />
          <Route path='/show-books_admin' component={ShowBookList_admin} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
          <Route path='/show-book_admin/:id' component={ShowBookDetails_admin} />
       
          
        </div>
      </Router>
    );
  }
}

export default App;

