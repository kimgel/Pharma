'use strict';

var express = require('express'); 
var router = new express.Router();
var eventtypes = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', eventtypes.all);
router.get('/:eventtypeId', eventtypes.show);
router.put('/:eventtypeId', custMiddleware.auth, eventtypes.update);
router.post('/', custMiddleware.auth, eventtypes.create);

router.param('eventtypeId', eventtypes.eventtype);

module.exports.router = router;

