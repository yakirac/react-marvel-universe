(function() {
	"use strict";

	var path = require('path');

	function setAppRoutes(app)
	{
		app.route('/').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/index.html'));
		});

		app.route('/test').get(function response(req, res) {  
		  res.sendFile(path.join(__dirname, '../dist/test.html'));
		});
	}

	module.exports = setAppRoutes;
}());
