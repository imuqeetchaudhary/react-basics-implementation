import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Id: </label>
          <input
            type="text"
            value={userId}
            name="userId"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Body: </label>
          <input
            type="text"
            value={body}
            name="body"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;
