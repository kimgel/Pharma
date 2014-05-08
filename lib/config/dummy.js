'use strict';

var mongoose = require('mongoose'),
    User = require('../modules/user/schema').User;

// Clear old users, then add a default user
User.find({}).remove(function() {
    User.create({
        provider: 'local',
        name: 'Test User',
        username: 'test',
        password: 'test'
    }, function() {
        console.log('Finished populating users');
    });
});
