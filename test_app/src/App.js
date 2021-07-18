import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/AppMain";
import Auth from "./containers/Auth";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";
import AuthService from "./services/AuthService";
import User from "./containers/User";

class App extends Component {
  state = {
    currentUser: undefined,
  };

  csStyles = {
    link: "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mx-1",
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut = () => {
    AuthService.logout();
  };

  render() {
    const currentUser = this.state.currentUser;

    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <Link to={"/"}>Test App</Link>
            </span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <div>
                <Link to={"/home"} className={this.csStyles.link}>
                  Home
                </Link>
              </div>

              {/* <Link
                to={"/signin"}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mx-1"
              >
                Sign in
              </Link>

              <Link
                to={"/signup"}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mx-1"
              >
                Sign up
              </Link> */}

              {currentUser && (
                <Link to={"/user"} className={this.csStyles.link}>
                  User
                </Link>
              )}

              {currentUser ? (
                <div>
                  <Link to={"/profile"} className={this.csStyles.link}>
                    {currentUser.username}
                  </Link>
                  <Link
                    to={"/signin"}
                    className={this.csStyles.link}
                    onClick={this.logOut}
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={"/signin"} className={this.csStyles.link}>
                    Sign in
                  </Link>

                  <Link to={"/signup"} className={this.csStyles.link}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/signin" component={Auth} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/user" component={User} />
            {/* <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
