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
  	app.use('/api/equipmentresources', require('./modules/settings/equipmentresources').router); 
  	app.use('/api/suppliesresources', require('./modules/settings/suppliesresources').router); 
  	app.use('/api/initiateevent', require('./modules/initiateevent').router); 
  	app.use('/api/eventtype', require('./modules/settings/eventtype').router); 
  	app.use('/api/parentevent', require('./modules/settings/parentevent').router);

/* Partials
=================================================================== */ 
    app.use('/', require('./modules/index').router); 
};
