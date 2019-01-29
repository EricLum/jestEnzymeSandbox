import React, { Component } from 'react';
import './App.css';
import TaskList from './Tasklist'

const tasks = ['do the dishes', 'mow the lawn', 'test react components']

class App extends Component {
  render() {
    return (
      <div className="App">
      <TaskList list={tasks}/>
      </div>
    );
  }
}

export default App;
