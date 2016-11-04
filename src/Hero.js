import React, { Component } from 'react';

export default class Hero extends Component {
	constructor(props) {
		super(props);
    this.state = {
      showHolder : true,
      showImage : false
    };
	}

  showHeroModal() {
    this.props.showHeroModal();
  }

  showHolderImage() {
    this.setState({ showHolder : true, showImage : false});
  }

  showHeroImage() {
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
      <div className="hero csnippet col-xs-8 col-lg-3" onMouseEnter={() => this.showHeroImage()} onMouseLeave={() => this.showHolderImage()} onClick={() => this.showHeroModal()}>
        <img src={this.props.hero.holderImage} style={holderImageStyle}/>
        <img src={this.props.hero.image} style={imageStyle}/>
      </div>
    );
  }
}