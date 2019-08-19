import React, { Component } from 'react';
import welcome from '../../static/img/8d98f96d897078efad10615477f8412b.jpg';


class homeIndex extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentWillMount() {

  }
  
  render() {
    
    
    return (
      <div style={{width:'100%'}}>
          <img src={welcome} alt='' width='80%' ></img>
      </div>
    );
  }
}

export default homeIndex;
