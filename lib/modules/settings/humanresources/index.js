'use strict';

var express = require('express');
var router = new express.Router();
var humanresources = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', humanresources.all);
router.get('/:humanResourceId', humanresources.show);
router.put('/:humanResourceId', custMiddleware.auth, humanresources.update);
router.post('/', custMiddleware.auth, humanresources.create);

router.param('humanResourceId', humanresources.humanresource);

module.exports.router = router;

