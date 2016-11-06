import http from 'axios';

export default class HeroService {

	constructor() {

	}

	getHero(id) {
		return http.get('/hero/' + id);
	}

	getHeros() {
		return http.get('/heros');
	}

}