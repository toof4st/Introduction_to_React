/*
 * EVENT HANDLING
 *
 * (bind vs. lambdas vs. class fields)
 * See React Docs: https://reactjs.org/docs/handling-events.html
 */

import React from "react";

// old method (bind)
class BindLoggingButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

// lambdas at use-site
// (Work-around mentioned in Modern JavaScript course)
class UseSiteLambdaLoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={e => this.handleClick(e)}>Click me</button>;
  }
}

// Class-fields lambda syntax. EcmaScript Stage 3 proposal
// (turned on in create-react-app by default)
class ClassFieldLambdaLoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
