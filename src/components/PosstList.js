import React, { Component } from "react";
import axios from "axios";

class PosstList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error Reteriving Data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </>
    );
  }
}

export default PosstList;
