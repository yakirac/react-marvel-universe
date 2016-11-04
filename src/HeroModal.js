import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

export default class HeroModal extends Component {
	constructor(props) {
		super(props);
	}

	closeHeroModal() {
		this.props.closeModal();
	}

	render() {
		return (
			<Modal show={this.props.showModal} onHide={() => this.closeHeroModal()}>
	      		<Modal.Body>
	      			<h2 className="cmodal-alias"><strong>{this.props.hero.name}</strong></h2>
					<h5 className="cmodal-fullname">aka {this.props.hero.fullName}</h5>
					<div className="shield-data">
				        <p><strong>Powers</strong></p>
				        {this.props.hero.powers}
				    </div>
				    <div className="shield-data">
				        <p><strong>Weapons</strong></p>
				        {this.props.hero.weapons}
				    </div>
				    <div className="shield-footer">
						<button className="btn btn-success cmodal-close" onClick={() => this.closeHeroModal()}>Close</button>
					</div>
	      		</Modal.Body>
	      	</Modal>
		);
	}
}