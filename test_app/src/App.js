import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
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
    nav: "flex items-center justify-between flex-wrap bg-blue-300 p-6",
    appNameDiv: "flex items-center flex-shrink-0 text-white mr-6",
    appNameSpan: "font-semibold text-xl tracking-tight",
    navItemsContainerDiv1:
      "w-full block flex-grow lg:flex lg:items-center lg:w-auto",
    navItemsContainerDiv2: "text-sm lg:flex-grow",
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
        <nav className={this.csStyles.nav}>
          <div className={this.csStyles.appNameDiv}>
            <span className={this.csStyles.appNameSpan}>
              <Link to={"/"}>Test App</Link>
            </span>
          </div>
          <div className={this.csStyles.navItemsContainerDiv1}>
            <div className={this.csStyles.navItemsContainerDiv2}>
              <Link to={"/home"} className={this.csStyles.link}>
                Home
              </Link>

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
                <Link to={"/profile"} className={this.csStyles.link}>
                  {currentUser.username}
                </Link>
              ) : (
                <Link to={"/signin"} className={this.csStyles.link}>
                  Sign in
                </Link>
              )}

              {currentUser ? (
                <Link
                  to={"/signin"}
                  className={this.csStyles.link}
                  onClick={this.logOut}
                >
                  Logout
                </Link>
              ) : (
                <Link to={"/signup"} className={this.csStyles.link}>
                  Sign Up
                </Link>
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
