'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    Eventt = require('./schema').Eventt;


// Find Item by id
exports.eventt = function(req, res, next, id) {
    Eventt.load(id, function(err, ev) {
        if (err) return next(err);
        if (!ev) return next(new Error('Failed to load Events : ' + id));
        req.ev = ev;
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
        Eventt.find()
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
    res.jsonp(req.ev);
};

//Update Item
exports.update = function(req, res) {
    var updateEventt = req.ev;
    updateEventt = _.extend(updateEventt, req.body);

    updateEventt.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateEventt: updateEventt
            });
        } else {
            res.jsonp(updateEventt);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newEventt = new Eventt(request);
    newEventt.creator = req.user;
    newEventt.save(function(err) {
        if (!err) {
            fmt.dump(newEventt, "Success");
            res.jsonp(newEventt);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
