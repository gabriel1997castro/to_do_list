import React from 'react';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" />
      </form>
    );
  }
}

AddNewTask.propTypes = {

};

export default AddNewTask;
