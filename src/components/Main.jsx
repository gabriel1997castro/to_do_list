import React, { Component } from 'react';
import propTypes from 'prop-types';
import AddNewTask from './AddNewTask';
import ToDoList from './ToDoList';

export default class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <h1>To Do List</h1>
        <AddNewTask />
        <ToDoList tasks={tasks} />
      </div>
    );
  }
}

ToDoApp.propTypes = {
  tasks: propTypes.arrayOf(String).isRequired,
};
