'use strict';

var express = require('express'); 
var router = new express.Router();
var equipmentresources = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', equipmentresources.all);
router.get('/:equipmentResourceId', equipmentresources.show);
router.put('/:equipmentResourceId', custMiddleware.auth, equipmentresources.update);
router.post('/', custMiddleware.auth, equipmentresources.create);

router.param('equipmentResourceId', equipmentresources.equipmentresource);

module.exports.router = router;

