import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/AppMain";
import Auth from "./containers/Auth";
import Signup from "./containers/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <Link to={"/"}>Test App</Link>
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to={"/home"}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mx-1"
              >
                Home
              </Link>

              <Link
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
              </Link>
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/signin" component={Auth} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
