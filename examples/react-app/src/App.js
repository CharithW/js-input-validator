import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Validator from "js-input-validator";

class App extends Component {
  state = {
    name: "",
    email: "",
    errors: []
  };

  schema = {
    name: {
      name: "name",
      type: "string",
      required: true
    }
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();

    const errors = new Validator(this.schema).run(this.state);
    const errObj = [];
    Object.keys(errors).forEach(key => {
      errObj.push(errors[key]);
    });
    this.setState({ errors: errObj });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JS Validator Sample</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <input type="submit" value="Submit" />
          {this.state.errors
            ? this.state.errors.map(err => <div> {err}</div>)
            : null}
        </form>
      </div>
    );
  }
}

export default App;
