'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    Eventtype = require('./schema').Eventtype;


// Find Item by id
exports.eventtype = function(req, res, next, id) {
    Eventtype.load(id, function(err, et) {
        if (err) return next(err);
        if (!et) return next(new Error('Failed to load Eventtypes : ' + id));
        req.et = et;
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
        Eventtype.find()
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
    res.jsonp(req.et);
};

//Update Item
exports.update = function(req, res) {
    var updateEventtype = req.et;
    updateEventtype = _.extend(updateEventtype, req.body);

    updateEventtype.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateEventtype: updateEventtype
            });
        } else {
            res.jsonp(updateEventtype);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newEventtype = new Eventtype(request);
    newEventtype.creator = req.user;
    newEventtype.save(function(err) {
        if (!err) {
            fmt.dump(newEventtype, "Success");
            res.jsonp(newEventtype);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
