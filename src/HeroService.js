import http from 'axios';

export default class HeroService {

	constructor() {

	}

	getHero() {

	}

	getHeros() {
		return http.get('/heros');
	}

}