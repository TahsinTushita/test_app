import React, { Component } from "react";
import AuthService from "../services/AuthService";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  cStyles = {
    container: "flex justify-center items-center h-screen",
    cardContainer: "w-full max-w-xs",
    card: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    label: "block text-gray-700 text-sm font-bold mb-2",
    input:
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    buttonContainer: "flex items-center justify-between",
    signupButton:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleRegister = (event) => {
    event.preventDefault();

    // this.setState({
    //   message: "",
    //   successful: false,
    // });

    // this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(
      (response) => {
        // this.setState({
        //   message: response.data.message,
        //   successful: true,
        // });
        console.log(response.data.message);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);

        // this.setState({
        //   successful: false,
        //   message: resMessage,
        // });
      }
    );
    // }
  };

  render() {
    return (
      <div className={this.cStyles.container}>
        <div className={this.cStyles.cardContainer}>
          <form className={this.cStyles.card} onSubmit={this.handleRegister}>
            <div className="mb-4">
              <label className={this.cStyles.label} for="username">
                Username
              </label>
              <input
                className={this.cStyles.input}
                id="username"
                type="text"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="mb-4">
              <label className={this.cStyles.label} for="email">
                Email
              </label>
              <input
                className={this.cStyles.input}
                id="email"
                type="email"
                placeholder="email"
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="mb-6">
              <label className={this.cStyles.label} for="password">
                Password
              </label>
              <input
                className={this.cStyles.input}
                id="password"
                type="password"
                placeholder="password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className={this.cStyles.buttonContainer}>
              <button
                className={this.cStyles.signupButton}
                type="button"
                onClick={this.handleRegister}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
