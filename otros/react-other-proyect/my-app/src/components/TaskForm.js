import React, { Component } from 'react';

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
  };

  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };

  onChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form action='' onSubmit={this.onSubmit}>
        <input type='text' name='title' placeholder='Write a Task' onChange={this.onChange} value={this.state.title} />
        <br />
        <br />
        <textarea name='description' placeholder='Write a Description' onChange={this.onChange} value={this.state.description}></textarea>
        <input type='submit' />
        {/* <button type='submit'>Save a Task</button> */}
      </form>
    );
  }
}

export default TaskForm;
