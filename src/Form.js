import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = { userName: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
            <input type="text"
              value={this.state.userName}
              onChange={(event) => this.setState({ userName: event.target.value })}
              placeholder="Github username" 
              className="form-control mr-2"
              required />
            <button type="submit" className="btn btn-primary" >Add card</button>
        </div>
      </form>
    );
  }
}

export default Form;