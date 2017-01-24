import http from 'axios';

export default class HeroService {

	constructor() {

	}

	getHero(id) {
		return http.get('/react/hero/' + id);
	}

	getHeros() {
		return http.get('/react/heros');
	}

}