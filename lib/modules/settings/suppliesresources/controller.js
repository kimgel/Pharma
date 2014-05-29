'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    SuppliesResource = require('./schema').SuppliesResource;


// Find Item by id
exports.suppliesresource = function(req, res, next, id) {
    SuppliesResource.load(id, function(err, sp) {
        if (err) return next(err);
        if (!sp) return next(new Error('Failed to load Supplies : ' + id));
        req.sp = sp;
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
        SuppliesResource.find()
        .sort('-created')
        //.populate(opts)
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
    res.jsonp(req.sp);
};

//Update Item
exports.update = function(req, res) {
    var updateSuppliesResource = req.item;
    updateSuppliesResource = _.extend(updateSuppliesResource, req.body);

    updateSuppliesResource.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateSuppliesResource: updateSuppliesResource
            });
        } else {
            res.jsonp(updateSuppliesResource);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newSuppliesResource = new SuppliesResource(request);
    newSuppliesResource.creator = req.user;
    newSuppliesResource.save(function(err) {
        if (!err) {
            fmt.dump(newSuppliesResource, "Success");
            res.jsonp(newSuppliesResource);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
