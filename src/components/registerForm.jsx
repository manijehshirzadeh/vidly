import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    account: { username: "", password: "", name: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registered");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={account.name}
              onChange={this.handleChange}
              name="name"
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
