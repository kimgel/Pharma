'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    EquipmentResource = require('./schema').EquipmentResource;


// Find Item by id
exports.equipmentresource = function(req, res, next, id) {
    EquipmentResource.load(id, function(err, eq) {
        if (err) return next(err);
        if (!eq) return next(new Error('Failed to load Equipments : ' + id));
        req.eq = eq;
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
        EquipmentResource.find()
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
    res.jsonp(req.eq);
};

//Update Item
exports.update = function(req, res) {
    var updateEquipmentResource = req.eq;
    updateEquipmentResource = _.extend(updateEquipmentResource, req.body);

    updateEquipmentResource.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateEquipmentResource: updateEquipmentResource
            });
        } else {
            res.jsonp(updateEquipmentResource);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newEquipmentResource = new EquipmentResource(request);
    newEquipmentResource.creator = req.user;
    newEquipmentResource.save(function(err) {
        if (!err) {
            fmt.dump(newEquipmentResource, "Success");
            res.jsonp(newEquipmentResource);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
