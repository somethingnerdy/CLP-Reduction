/* ========================================================================
 * FrontEndDev: maproutecontroller.js v1.0.0
 * ========================================================================
 * This file maps the route functions to controller object methods
 * This method allows for less code in your app.js
 * Note : may have to update some of the routes in order to 
 *        make it scalable 
 * ======================================================================== */

// maps functions to controller object methods
exports.mapRoute = function (app, prefix) {
	
	prefix = '/' + prefix;

	var prefixObj = require('../controllers' + prefix);
	
	//show
	app.post(prefix +'/login', prefixObj.login);

	//show
	app.get(prefix +'/:id', prefixObj.show);

	// create
	app.post(prefix + '/create', prefixObj.create);

	// edit
	app.get(prefix + '/:id/edit', prefixObj.edit);

	//update
	app.put(prefix + '/:id', prefixObj.update);

	//destroy
	app.del(prefix +':id', prefixObj.destroy);

};