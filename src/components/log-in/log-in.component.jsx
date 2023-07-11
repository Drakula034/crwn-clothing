import React from "react";

import "./log-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

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
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Log In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Log In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
