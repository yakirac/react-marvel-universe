(function() {
	"use strict";

	var path = require('path');
	var request = require('request-promise');
	var http = require('http');

	function setAppRoutes(app)
	{
		app.route('/').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/index.html'));
		});

		app.route('/test').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/test.html'));
		});

		app.route('/heros').get(function response(req, res) {
			res.sendFile(path.join(__dirname, '../data/heros.json'));
		});
	}

	module.exports = setAppRoutes;
}());
