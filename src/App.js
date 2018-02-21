import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import SwitchButton from './SwitchButton';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Luke', age: 30 },
    ],
    showPersons: false,
  };

  render() {
    const person = this.state.showPersons && (
      <div>
        {this.state.persons.map((person, index) => (
          <Person 
            key={person.id} 
            name={person.name} 
            age={person.age}
            onClick={this._deletePersonHandler.bind(this, index)}
            onChange={event => this._nameChangeHandler(event, person.id)}
          >
            <p>
              {`${person.name} says "Hello" to you!`}
            </p>
          </Person>
        ))}
      </div>
    );

    // .bind(this, ...args) is used to pass arguments to event handler
    // 'this' is always defined in the arrow function
    return (
      <div className="App">
        <h1>My react app</h1>
        <SwitchButton />
        <button className="button-custom" onClick={this._onToggleBtnClick}>
          Toggle switch
        </button>
        {person}
      </div>
      // React.createElement(
      //   'div',
      //   { className: 'App' },
      //   React.createElement('h1', null, "I'm a react app!")
      // )
    );
  }

  _onToggleBtnClick = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons,
    }));
  };

  _deletePersonHandler = index => {
    // Don't use pointer, create a deep copy instead
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  }

  _nameChangeHandler = (event, id) => {
    const idx = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[idx].name = event.target.value;
    this.setState({
      persons: persons,
    });
  };
}

export default App;
