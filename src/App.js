import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My react app</h1>
        <Person />
      </div>
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, "I'm a react app!")
      // )
    );
  }
}

export default App;
