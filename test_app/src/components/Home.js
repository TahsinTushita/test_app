import React, { Component } from "react";
import UserService from "../services/UserService";

class Home extends Component {
  state = {
    content: "",
  };

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({ content: response.data });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  cStyles = {
    container: "flex justify-center items-center h-screen bg-blue-100",
    card: "text-center text-blue-600 rounded-lg bg bg-gray-50 border p-8 shadow-sm",
    title: "font-bold text-6xl",
    subTitle: "text-2xl text-blue-400",
  };

  render() {
    return (
      <div className={this.cStyles.container}>
        <div className={this.cStyles.card}>
          <h1 className={this.cStyles.title}>{this.state.content}</h1>
          <h2 className={this.cStyles.subTitle}>Create React App</h2>
          <h3 className={this.cStyles.subTitle}>w/ tailwindcss v2.0</h3>
        </div>
      </div>
    );
  }
}

export default Home;
