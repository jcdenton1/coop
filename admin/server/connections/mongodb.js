var mongoose = require( 'mongoose' );
var logger = require("../logs/logger");

var env = process.env.ENV || "dev";

var db_config = require('../../config/databases')[env];

mongoose.connect(db_config.mongodb.uri, { useMongoClient: true });

mongoose.set('debug', function (collection, method, query, doc) {
  logger.info("Mongoose: " + collection + "." + method +
    "(" + JSON.stringify(query, null, 2).replace(/\n/g,'') + ", " +
    JSON.stringify(doc, null, 2).replace(/\n/g,'' ) + ")");
});

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
  logger.info('Mongoose connection open to ' + db_config.mongodb.uri);
});

mongoose.connection.on('error',function (err) {
  logger.info('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    logger.info('Mongoose connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      logger.info('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});