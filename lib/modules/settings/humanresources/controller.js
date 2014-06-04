'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    HumanResource = require('./schema').HumanResource;


// Find Item by id
exports.humanresource = function(req, res, next, id) {
    HumanResource.load(id, function(err, hr) {
        if (err) return next(err);
        if (!hr) return next(new Error('Failed to load Human Resource: ' + id));
        req.hr = hr;
        next();
    });
};

//List all Item
exports.all = function(req, res) {
    /*
    var opts = [{
            path: 'supplier',
            select: 'name'
        }, {
            path: 'broker',
            select: 'name'
        }, {
            path: 'forwarder',
            select: 'name'
        }];
    */
        HumanResource.find()
        .sort('-created')
        .select('name skill location')
        .exec(function(err, items) {
            if (!err) {
                res.jsonp(items);
            } else {
                return res.send(err);
            }
        });
};

//Show Item
exports.show = function(req, res) {
    res.jsonp(req.hr);
};

//Update Item
exports.update = function(req, res) {
    var updateHumanResource = req.hr;
    updateHumanResource = _.extend(updateHumanResource, req.body);

    updateHumanResource.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateHumanResource: updateHumanResource
            });
        } else {
            res.jsonp(updateHumanResource);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newHumanResource = new HumanResource(request);
    newHumanResource.creator = req.user;
    newHumanResource.save(function(err) {
        if (!err) {
            fmt.dump(newHumanResource, "Success");
            res.jsonp(newHumanResource);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
