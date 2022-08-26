import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    account: { username: "", password: "", name: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = " Username must be valid email.";
    if (account.password.trim() === "")
      errors.password = " Password length must be at least 5.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Registered");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <input
            name="name"
            value={account.name}
            label="Name"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
