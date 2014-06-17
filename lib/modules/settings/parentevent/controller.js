'use strict'; 

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    Parentevent = require('./schema').Parentevent;


// Find Item by id
exports.parentevent = function(req, res, next, id) {
    Parentevent.load(id, function(err, pr) {
        if (err) return next(err);
        if (!pr) return next(new Error('Failed to load Parentevents : ' + id));
        req.pr = pr;
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
        Parentevent.find()
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
    res.jsonp(req.pr);
};

//Update Item
exports.update = function(req, res) {
    var updateParentevent = req.pr;
    updateParentevent = _.extend(updateParentevent, req.body);

    updateParentevent.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateParentevent: updateParentevent
            });
        } else {
            res.jsonp(updateParentevent);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newParentevent = new Parentevent(request);
    newParentevent.creator = req.user;
    newParentevent.save(function(err) {
        if (!err) {
            fmt.dump(newParentevent, "Success");
            res.jsonp(newParentevent);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
