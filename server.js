;(function(){
	"use strict";
	var express;
	/**
	* Module dependencies. 
	*/
	express = require("./framework/express");
	// Initialize server
	function startServer() {
		// Initialize express
		var app = express.init();
		// Start up the server on the port specified in the config
		app.listen(3200, function() {
			console.log('App started on port 3200');
		});
		module.exports = app;
	}
	startServer();
}());


/*var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
	publicPath : config.output.publicPath,
	hot : true
});

server.listen(3000, 'localhost', function(err, result) {
	if(err) return console.log(err);

	console.log('Listening at http://localhost:3000/');
});*/
