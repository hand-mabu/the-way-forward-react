import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class NavigationBar extends Component {
  // state = {
  //   current: 'Login',
  // };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/loginout">LoginOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      // <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      //   <Menu.Item key="Home">
      //   <Link className="navbar-brand" to="/">Home</Link>
      //   </Menu.Item>
      //   <Menu.Item key="Login">
      //     <Link className="nav-link" to="/login">Login</Link>
      //   </Menu.Item>
      // </Menu>
    );
  }
}

export default NavigationBar;