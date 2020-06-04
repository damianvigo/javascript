import React, { Component } from 'react';
import propTypes from 'prop-types';

// import './Task.css';

class Task extends Component {
  StyleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'red' : '#ccc',
      textDecoration: this.props.task.done ? 'line-through' : '',
    };
  }

  render() {
    const { task } = this.props;
    return (
      <p style={this.StyleCompleted()}>
        {/* {this.props.task.title} - {this.props.task.description} - {this.props.task.done} - {this.props.task.id} */}
        {task.title} - {task.description} - {task.done} - {task.id}
        <input type='checkbox' />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}

Task.propTypes = {
  task: propTypes.object.isRequired,
};

const btnDelete = {
  fontSize: '18px',
  background: '#ccc',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default Task;
