import { Component } from "react";
import AuthService from "../services/AuthService";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

class Auth extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    message: "",
  };

  cStyles = {
    container: "flex justify-center items-center h-screen",
    cardContainer: "w-full max-w-xs",
    card: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    label: "block text-gray-700 text-sm font-bold mb-2",
    buttonContainer: "flex items-center justify-between",
    signinButton:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length == 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className={this.cStyles.container}>
        <div className={this.cStyles.cardContainer}>
          <form
            className={this.cStyles.card}
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="mb-4">
              <label className={this.cStyles.label} for="email">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
                onChange={this.onChangeEmail}
                validations={[required, email]}
              />
            </div>
            <div className="mb-6">
              <label className={this.cStyles.label} for="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <div className={this.cStyles.buttonContainer}>
              <button
                className={this.cStyles.signinButton}
                type="button"
                disabled={this.state.loading}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
