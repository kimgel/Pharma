'use strict';

var express = require('express');
var router = new express.Router();
var users = require('./controller');
var custMiddleware = require('../middleware');

router.get('/', custMiddleware.auth, users.all);
router.post('/', users.create);
router.put('/', users.changePassword);
router.get('/me', users.me);
router.get('/:id', users.show);

module.exports.router = router;
