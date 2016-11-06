import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import HeroService from './HeroService';

export default class HeroModal extends Component {
	constructor(props) {
		super(props);

		this.state = { description : '', marvelText : '' };

		this.heroService = new HeroService();
	}

	componentWillReceiveProps(nextProps) {
		if(!this.props.showModal && nextProps.showModal) {
			this.heroService.getHero(nextProps.hero.id).then(function(res){
				this.setState({description : res.data.hero.description, marvelText : res.data.attributionText});
			}.bind(this)).catch(function(error) {
				console.log(error);
			});
		}
	}

	closeHeroModal() {
		this.props.closeModal();
	}

	render() {
		var descriptionStyle = {
			display : this.state.description == '' ? 'none' : 'block'
		}

		return (
			<Modal show={this.props.showModal} onHide={() => this.closeHeroModal()}>
	      		<Modal.Body>
	      			<h2 className="cmodal-alias"><strong>{this.props.hero.name}</strong></h2>
					<h5 className="cmodal-fullname">aka {this.props.hero.fullName}</h5>
					<div className="shield-data description" style={descriptionStyle}>
				        <p><strong>Origin</strong></p>
				        {this.state.description}
				    </div>
					<div className="shield-data">
				        <p><strong>Powers</strong></p>
				        {this.props.hero.powers}
				    </div>
				    <div className="shield-data">
				        <p><strong>Weapons</strong></p>
				        {this.props.hero.weapons}
				    </div>
				    <div className="shield-footer">
				    	<a href="http://marvel.com" className="marvel-data">{this.state.marvelText}</a>
						<button className="btn btn-success cmodal-close" onClick={() => this.closeHeroModal()}>Close</button>
					</div>
	      		</Modal.Body>
	      	</Modal>
		);
	}
}