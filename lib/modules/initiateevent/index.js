'use strict';

var express = require('express'); 
var router = new express.Router();
var initiateevents = require('./controller');
var custMiddleware = require('../middleware');

router.get('/', initiateevents.all);
router.get('/:initiateEventId', initiateevents.show);
router.put('/:initiateEventId', custMiddleware.auth, initiateevents.update);
router.post('/', custMiddleware.auth, initiateevents.create);

router.param('initiateEventId', initiateevents.initiateevent);

module.exports.router = router;
