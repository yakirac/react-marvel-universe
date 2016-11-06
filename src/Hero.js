import React, { Component } from 'react';

import Img from 'react-image-holder';

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

    var placeholder = this.props.hero.holderImage;

    return (
      <div className="hero csnippet col-xs-8 col-lg-3" onMouseEnter={() => this.showHeroImage()} onMouseLeave={() => this.showHolderImage()} onClick={() => this.showHeroModal()}>
        <Img src="" usePlaceholder={true} width={this.props.hero.holderImage.width} height={this.props.hero.holderImage.height} placeholder={placeholder} style={holderImageStyle}/>
        <Img src={this.props.hero.image} style={imageStyle}/>
      </div>
    );
  }
}