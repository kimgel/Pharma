'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    crypto = require('crypto'),
    mongoose = require('mongoose');

var privateKey = fs.readFileSync('./lib/certs/privatekey.pem').toString();
var certificate = fs.readFileSync('./lib/certs/certificate.pem').toString();
var credentials = {
    key: privateKey,
    cert: certificate
};

var pharma = function() {

    var self = this;

    // Populate cache
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = {
                'index.html': ''
            };
        }
        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./app/index.html');
    };

    // Retrieve entry content from cache
    self.cache_get = function(key) {
        return self.zcache[key];
    };
   
    self.initializeServer = function() {
        // Application Config
        var config = require('./lib/config/config');

        // Connect to database
        var db = mongoose.connect(config.mongo.uri, config.mongo.options);

        //require('./lib/config/dummy');

        // Passport Configuration
        var passport = require('./lib/config/passport');

        self.app = express();

        // Express settings
        require('./lib/config/express')(self.app);

        // Routing
        require('./lib/routes')(self.app);
    };

    self.initialize = function() {
       //self.setupVariables();
        self.populateCache();

        // Create the express server and routes.
        self.initializeServer();
    };

    self.start = function() {

        //  Start the app on the specific interface (and port).
        self.app.set('port', process.env.OPENSHIFT_INTERNAL_PORT || 9000);
        self.app.set('sslport', 9001);
        self.app.set('ipaddr', process.env.OPENSHIFT_INTERNAL_IP || 'localhost');

        // Set http
        self.app.listen(self.app.get('port'), self.app.get('ipaddr'),
            function() {
                console.log("Express server listening on port " + self.app.get('port'));
            }
        );
        // Set https
        https.createServer(credentials, self.app).listen(
            self.app.get('sslport'),
            self.app.get('ipaddr'),
            function() {
                console.log("SSL server started on: " + self.app.get('sslport'))
            }
        );
        
        exports = module.exports = self.app;
    };

};

var startApp = new pharma();
startApp.initialize();
startApp.start();
