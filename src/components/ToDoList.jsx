import React from 'react';
import propTypes from 'prop-types';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  remove(event) {
    const value = event.target.parentNode.querySelector('span').innerText;
    const { remove: removeTask } = this.props;
    removeTask(value);
  }

  render() {
    const { tasks } = this.props;
    const items = tasks.map((elem, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={i}>
        <span>{elem}</span>
        <button type="button" onClick={(event) => this.remove(event)}>X</button>
      </li>
    ));

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  tasks: propTypes.arrayOf(String).isRequired,
  remove: propTypes.func.isRequired,
};


export default ToDoList;
