import React, { Component } from 'react';
import EditableFormTable from './EditableFormTable/EditableFormTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return <EditableFormTable />;
  }
}

export default App;
