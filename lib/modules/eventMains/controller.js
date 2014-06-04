'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    EventMain = require('./schema').EventMain;


// Find Item by id
exports.eventmain = function(req, res, next, id) {
    EventMain.load(id, function(err, ev) {
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
        EventMain.find()
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
    var updateEventMain = req.ev;
    updateEventMain = _.extend(updateEventMain, req.body);

    updateEventMain.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateEventMain: updateEventMain
            });
        } else {
            res.jsonp(updateEventMain);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newEventMain = new EventMain(request);
    newEventMain.creator = req.user;
    newEventMain.save(function(err) {
        if (!err) {
            fmt.dump(newEventMain, "Success");
            res.jsonp(newEventMain);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
