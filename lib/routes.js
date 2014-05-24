'use strict';

var api = require('./modules/api');

module.exports = function(app) {

/* Users
=================================================================== */ 
    app.use('/api/users', require('./modules/user').router); 

/* Session
=================================================================== */ 
    app.use('/api/session', require('./modules/session').router);  

/* App API
=================================================================== */ 
  	app.use('/api/humanresources', require('./modules/settings/humanresources').router); 


/* Partials
=================================================================== */ 
    app.use('/', require('./modules/index').router); 
};
