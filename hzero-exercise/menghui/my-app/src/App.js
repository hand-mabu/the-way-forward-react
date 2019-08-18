import React, { Component } from 'react';
import './App.css';
import UserAdd from './components/UserAdd';
import UserListContainer from './containers/UserList';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <HomeLayout>
          <div>
            <Route path="/user/add" component={UserAdd} ></Route>
            <Route path="/user/list" component={UserListContainer}></Route>
          </div>
        </HomeLayout>
      </Router>
    );
  }
}

export default App;
