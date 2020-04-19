import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoList from './ToDoList';

export default class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <AddNewTask />
        <ToDoList />
      </div>
    );
  }
}
