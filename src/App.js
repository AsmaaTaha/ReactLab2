import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTasks from './ToDo Task/AddTask';
import AllTasks from './ToDo Task/AllTasks';
import CompletedTask from './ToDo Task/Completed_Task';
import DeletedTask from './ToDo Task/Deleted_Task';
class App extends Component {
  render() {
    return (
      <>
      ALL TASKS:
        <AddTasks />
        <div className="alltasks">
          <AllTasks />
        </div>
COMPLETED:
        <div className="completed">

          <CompletedTask />
        </div>
DELETED:
        <div className="deleted">
          <DeletedTask />
        </div>
      </>
    )
  }
}

export default App;
