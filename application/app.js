/* ========================================================================
 * FrontEndDev: app.js v1.0.0
 * ========================================================================
 * This is the entry point of the application
* ======================================================================== */

/* ========================================================================
// Module dependencies.
* ======================================================================== */
var express = require('express');
var path = require('path');
var routes = require('./main/router');
var map = require('./controllers/maproutecontroller');
var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

// create a mongoDb server
var server = new mongodb.Server('localhost', 27017, {auto_reconnect : true});
var db = new mongodb.Db('frontEndTechDev', server);

// connect to mongoose
mongoose.connect('mongodb://127.0.0.1/frontEndTechDev');
mongoose.connection.on('open', function () {
	console.log('Connected to Mongoose');
});

// create an instance of express
var app = express();


/* ========================================================================
// all environments configuration
* ======================================================================== */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('S3CRE7'));
app.use(express.session({key:'app.sess', secret:'S3CRE7'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, '/public')));
app.use(function (req, res, next) {
	throw new Error(req.url + ' not found');
});
app.use(function (err, req, res, next) {
	console.log(err);
	res.send('this message  is the error ' + err.message);
});

/* ========================================================================
// development only
* ======================================================================== */
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// main route
app.get('/', routes.main);

app.get('/productMix/:id', routes.acquisition)



/* ========================================================================
// This is a temporary route in order to populate our mongoDb
// Will be removed in the future
* ======================================================================== */
app.get('/product', routes.create);

// array of controllers that will follow the mapRoutes module
var prefixes = ['product','user'];

// Loop through each prefix and attach/map to the route
prefixes.forEach(function (prefix) {
	map.mapRoute(app, prefix);
});

// Create an http connection
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
