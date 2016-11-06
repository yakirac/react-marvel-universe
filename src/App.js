import React, { Component } from 'react';

import Hero from './Hero';

import HeroModal from './HeroModal';

import HeroService from './HeroService';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal : false,
			hero : {},
			heros: []
		};

		this.heroService = new HeroService();
	}

	componentDidMount() {
		this.heroService.getHeros().then(function(data) {
			this.setState({ heros : data.data });
		}.bind(this)).catch(function(error) {
			console.log(error);
		});
	}

	showHeroModal(hero) {
		this.setState({ showModal : true, hero : hero });
	}

	closeHeroModal() {
		this.setState({ showModal : false, hero : {} });
	}

	render() {
	    var heros = this.state.heros.map((hero) => {
	    	return (
	    		<Hero key={hero.id.toString()} hero={hero} showHeroModal={() => this.showHeroModal(hero)}></Hero>
	    	);
	    });
	    return (
	      <div className="container">
	      	<h1>Heros</h1>
	      	<div className="row">
	      		{heros}
	      	</div>
	      	<HeroModal showModal={this.state.showModal} closeModal={() => this.closeHeroModal()} hero={this.state.hero}></HeroModal>
	      </div>
	    );
	}
}