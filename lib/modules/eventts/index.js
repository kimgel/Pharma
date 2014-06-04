'use strict';

var express = require('express'); 
var router = new express.Router();
var eventts = require('./controller');
var custMiddleware = require('../middleware');

router.get('/', eventts.all);
router.get('/:eventtId', eventts.show);
router.put('/:eventtId', custMiddleware.auth, eventts.update);
router.post('/', custMiddleware.auth, eventts.create);

router.param('eventtId', eventts.eventt);

module.exports.router = router;

