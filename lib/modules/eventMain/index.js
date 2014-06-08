'use strict';

var express = require('express'); 
var router = new express.Router();
var eventmains = require('./controller');
var custMiddleware = require('../middleware');

router.get('/', eventmains.all);
router.get('/:eventMainId', eventmains.show);
router.put('/:eventMainId', custMiddleware.auth, eventmains.update);
router.post('/', custMiddleware.auth, eventmains.create);

router.param('eventMainId', eventmains.eventmain);

module.exports.router = router;
