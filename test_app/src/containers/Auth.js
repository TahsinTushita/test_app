const { Component } = require("react");

class Auth extends Component {
  cStyles = {
    container: "flex justify-center items-center h-screen",
    cardContainer: "w-full max-w-xs",
    card: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    label: "block text-gray-700 text-sm font-bold mb-2",
    buttonContainer: "flex items-center justify-between",
    signinButton:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };

  render() {
    return (
      <div className={this.cStyles.container}>
        <div className={this.cStyles.cardContainer}>
          <form className={this.cStyles.card}>
            <div className="mb-4">
              <label className={this.cStyles.label} for="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className={this.cStyles.label} for="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className={this.cStyles.buttonContainer}>
              <button className={this.cStyles.signinButton} type="button">
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
