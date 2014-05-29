'use strict';

var express = require('express'); 
var router = new express.Router();
var suppliesresources = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', suppliesresources.all);
router.get('/:suppliesResourceId', suppliesresources.show);
router.put('/:suppliesResourceId', custMiddleware.auth, suppliesresources.update);
router.post('/', custMiddleware.auth, suppliesresources.create);

router.param('suppliesResourceId', suppliesresources.suppliesresource);

module.exports.router = router;

