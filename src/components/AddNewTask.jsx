import React from 'react';
import propTypes from 'prop-types';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  justSubmitted(event) {
    event.preventDefault();
    const { updateList } = this.props;
    const input = event.target.querySelector('input');
    const { value } = input;
    updateList(value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={(event) => this.justSubmitted(event)}>
        <input type="text" />
      </form>
    );
  }
}

AddNewTask.propTypes = {
  updateList: propTypes.func.isRequired,
};

export default AddNewTask;
