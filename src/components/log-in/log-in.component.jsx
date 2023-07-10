import React from "react";

import "./log-in.styles.scss";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  changeHandler = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2 className="title">I already have account</h2>
        <span>Login with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.changeHandler}
            required
          />
          <label>Email</label>
          <input
            name="email"
            type="password"
            value={this.state.password}
            onChange={this.changeHandler}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LogIn;
