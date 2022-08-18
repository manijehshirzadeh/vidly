import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    account: { username: "", password: "", name: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registered");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
