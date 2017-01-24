(function() {
	"use strict";

	var path = require('path');
	var request = require('request-promise');
	var http = require('http');
	var md5 = require('md5');

	var marvelApiUrl = 'http://gateway.marvel.com/v1/public/';
	var publicKey = '8c34265a34cafbb96020f5ee3fe0fe04';
	var privateKey = process.env.MARVEL_PRIVATE_KEY;

	function MarvelService()
	{
		return {
			getCharacter : getCharacter
		}

		function getCharacter(id) {
			var now = new Date();
			var timeStamp = now.getTime();
			var hash = md5(timeStamp+privateKey+publicKey);

			console.log(timeStamp, privateKey, publicKey);

			return request({
				method : 'GET',
				url : marvelApiUrl + 'characters/' + id + '?apikey=' + publicKey + '&ts=' + timeStamp + '&hash=' + hash
			});
		}
	}

	module.exports = MarvelService;
}());