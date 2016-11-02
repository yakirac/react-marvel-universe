import React, { Component } from 'react';

export default class Greeting extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}