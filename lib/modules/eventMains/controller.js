'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'), 
    _ = require('lodash'),
    moment = require('moment'),
    EventMain = require('./schema').EventMain;


// Find Material by id
exports.eventmain = function(req, res, next, id) {
    EventMain.load(id, function(err, ev) {
        if (err) return next(err);
        if (!ev) return next(new Error('Failed to load Events : ' + id));
        req.ev = ev;
        next();
    });
};


//List all Material
exports.all = function(req, res) {
/*
    var opts = [{
        path: 'eventtypes',
        select: 'name'
    }];*/
    EventMain.find()
        .sort('-created')
        //.populate(opts)
        .lean()
        .exec(function(err, eventmains) {
            if (!err) {
                eventmains = eventmains.map(function(eventmain) {
                    eventmain.expired = moment(eventmain.eventdateto).isBefore();
                    eventmain.expired 
                        ? eventmain.status = 'inactive' 
                        : eventmain.status = 'active';
                    return eventmain;
                });
                res.jsonp(eventmains);
            } else {
                return res.send(err);
            }
        });
};

//Show Material
exports.show = function(req, res) {
    var eventmain = req.eventmain.toObject();
    var expired = moment(eventmain.eventdateto).isBefore();
    eventmain["expired"] = expired;
    expired 
        ? eventmain["status"] = 'inactive' 
        : eventmain["status"] = 'active';
    //res.jsonp(eventmain);
    //res.jsonp(eventmain);
    console.log(eventmain);
    //res.jsonp(req.ev);
};


//Update Material
exports.update = function(req, res) {
    var updateEventMain = req.eventmain;
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
// Create Material
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
