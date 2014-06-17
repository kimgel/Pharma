'use strict';

var express = require('express'); 
var router = new express.Router();
var parentevents = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', parentevents.all);
router.get('/:parenteventId', parentevents.show);
router.put('/:parenteventId', custMiddleware.auth, parentevents.update);
router.post('/', custMiddleware.auth, parentevents.create);

router.param('parenteventId', parentevents.parentevent);

module.exports.router = router;

