(function() {
	"use strict";

	var path = require('path');
	var request = require('request-promise');
	var http = require('http');

	var MarvelService = require('./app.marvelService');

	var mService = new MarvelService();

	function setAppRoutes(app)
	{
		app.route('/react').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/index.html'));
		});

		app.route('/react/test').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/test.html'));
		});

		app.route('/react/heros').get(function response(req, res) {
			res.sendFile(path.join(__dirname, '../data/heros.json'));
		});

		app.route('/react/hero/:id').get(function response(req, res) {
			mService.getCharacter(req.params.id).then(function(data) {
				var character = JSON.parse(data);
				res.json({ attributionText : character.attributionText, 
					attributionHTML : character.attributionHTML, 
					hero : character.data.results[0] 
				});
			});
		});
	}

	module.exports = setAppRoutes;
}());
