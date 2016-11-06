(function() {
	"use strict";
	/**
	 * Module dependencies.
	 */
	var express = require('express');
	var path = require('path');
	var webpack = require('webpack');
	var WebpackDevMiddleware = require('webpack-dev-middleware');
	var WebpackHotMiddleware = require('webpack-hot-middleware');
	var config = require('../webpack.config');
	var isDevEnv = process.env.NODE_ENV !== 'prod';
	
	/**
	 * Initialize application middleware.
	 *
	 * @method initMiddleware
	 * @param {Object} app The express application
	 * @private
	 */
	function initMiddleware(app) {
		// Showing stack errors
		app.set("showStackError", true);
		// Enable jsonp
		app.enable("jsonp callback");

		if(isDevEnv) {
			console.log('Development');
			var compiler = webpack(config);
			app.use(WebpackDevMiddleware(compiler, {
				publicPath : config.output.publicPath,
				stats : { colors : true }
			}));
			app.use(WebpackHotMiddleware(compiler));
		}
		else {
			console.log('Production');	
		}
		
		app.use(express.static(path.join(__dirname, '../dist')));
	}

	/**
	 * Configure app routes.
	 *
	 * @method initRoutes
	 * @param {Object} app The express application
	 * @private
	 */

	function initRoutes(app) {
		// Globbing routing files
		//pathUtils.getGlobbedPaths(path.join(__dirname, "../routes/**/*.routes.js")).forEach(function(routePath) {
		//	require(path.resolve(routePath))(app);
		//});

		require('../routes/app.routes.js')(app);
	}

	/**
	 * Initialize the Express application.
	 *
	 * @method init
	 * @returns {Object} the express application
	 */
	function init() {
		// Initialize express app
		var app = express();
		// Initialize Express middleware
		initMiddleware(app);
		initRoutes(app);
		return app;
	}

	module.exports.init = init;
}());
