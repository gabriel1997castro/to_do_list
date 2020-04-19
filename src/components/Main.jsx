import React, { Component } from 'react';
import propTypes from 'prop-types';
import AddNewTask from './AddNewTask';
import ToDoList from './ToDoList';

export default class ToDoApp extends Component {
  constructor(props) {
    super();

    this.state = { tasks: props.tasks };
  }

  updateList(text) {
    const { tasks: updatedTasks } = this.state;
    updatedTasks.push(text);
    this.setState({ tasks: updatedTasks });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>To Do List</h1>
        <AddNewTask updateList={(text) => this.updateList(text)} />
        <ToDoList tasks={tasks} />
      </div>
    );
  }
}

ToDoApp.propTypes = {
  tasks: propTypes.arrayOf(String).isRequired,
};
