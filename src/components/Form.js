import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { username, comments, topic } = this.state;
    alert(`${username} ${comments} ${topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <br />
        <div>
          <label>Comments: </label>
          <textarea
            type="text"
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <br />
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
