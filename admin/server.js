// ==== modules ====
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require("./server/logs/logger");

// ==== configuration ====
var env = process.env.ENV || "dev";
var port = process.env.PORT || 8080; // set our port
app.use(require('morgan')(env, { "stream": logger.stream }));
db = require('./server/connections/mongodb');

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/publicdist')); // set the static files location /public/img will be /img for users

// ==== routes ====
require('./server/routes')(app); // pass our application into our routes

// ==== start app ====
app.listen(port);
logger.info('Magic happens on port ' + port);
exports = module.exports = app;