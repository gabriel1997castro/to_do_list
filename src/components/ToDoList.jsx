import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <u1>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </u1>
    );
  }
}

ToDoList.propTypes = {

};

export default ToDoList;
