import React from 'react';
import propTypes from 'prop-types';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tasks } = this.props;
    const items = tasks.map((elem) => {
      return <li>{elem}</li>;
    });

    return (
      <u1>
        {items}
      </u1>
    );
  }
}

ToDoList.propTypes = {
  tasks: propTypes.arrayOf(String).isRequired,
};


export default ToDoList;
