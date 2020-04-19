import React from 'react';
import propTypes from 'prop-types';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    // eslint-disable-next-line react/no-array-index-key
    const items = tasks.map((elem, i) => <li key={i}>{elem}</li>);

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  tasks: propTypes.arrayOf(String).isRequired,
};


export default ToDoList;
