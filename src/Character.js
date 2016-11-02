import React, { Component } from 'react';

export default class Character extends Component {
	constructor(props) {
		super(props);
    this.state = {
      showHolder : true,
      showImage : false
    };
	}

  showCharacterModal() {

  }

  showHolderImage() {
    this.setState({ showHolder : true, showImage : false});
  }

  showCharacterImage() {
    this.setState({ showHolder : false, showImage : true});
  }

	render() {
    var holderImageStyle = {
      height: '210px', 
      width: '100%',
      display : this.state.showHolder ? 'block' : 'none'
    };

    var imageStyle = {
      height: '210px', 
      width: '100%',
      display : this.state.showImage ? 'block' : 'none'
    };

    return (
      <div className="character csnippet col-xs-8 col-lg-3" onMouseEnter={() => {this.showCharacterImage()}} onMouseLeave={() => {this.showHolderImage()}}>
        <img src={this.props.hero.holderImage} style={holderImageStyle}/>
        <img src={this.props.hero.image} style={imageStyle}/>
      </div>
    );
  }
}