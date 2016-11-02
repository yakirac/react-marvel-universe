import React, { Component } from 'react';

export default class Character extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      <div className="character csnippet col-xs-8 col-lg-3">
        <img src={this.props.holderImage} style={{height: '210px', width: '100%', display: 'block'}}/>
      </div>
    );
  }
}