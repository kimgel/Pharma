'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),
    InitiateEvent = require('./schema').InitiateEvent;


// Find InitiateEvent by id
exports.initiateevent = function(req, res, next, id) {
    if (req.query.searchCode) {
        /*
        Material.findOne({ 'code': id },function(err,material){
            if (err) return next(err);
            if (!material) return next(new Error('Material not found.'));
            req.material = material;            
            next();
        });
        */
        var opts = [{
            path: 'eventtype'
        }];
        InitiateEvent.findOne({ 'no': id })
            .sort('-created')
            .populate(opts)
            .exec(function(err, initiateevents) {
                if (!err) {
                    if(initiateevents){
                        res.jsonp(initiateevents);
                    } else {                        
                        return next(new Error('InitiateEvent not found.'));
                    }
                    
                } else {
                    return res.send(err);
                }
            });


    } else {
        InitiateEvent.load(id, function(err, initiateevent) {
            if (err) return next(err);
            if (!initiateevent) return next(new Error('Failed to load InitiateEvent: ' + id));
            req.initiateevent = initiateevent;
            next();
        });
    }

};


//List all Material
exports.all = function(req, res) {
    /*
    var query = req.query.kim,
        columns = '';
    if(query){
        columns = query;
    }*/

    var opts = [{
        path: 'eventtype',
        select: 'name'
    }];
    InitiateEvent.find()
        .sort('-created')
        .populate(opts)
       // .select(columns)
        .lean()
        .exec(function(err, initiateevents) {
            if (!err) {
                initiateevents = initiateevents.map(function(initiateevent) {
                    initiateevent.expired = moment(initiateevent.eventdateto).isBefore();
                    initiateevent.expired 
                        ? initiateevent.status = 'inactive' 
                        : initiateevent.status = 'active';
                    return initiateevent;
                });
                res.jsonp(initiateevents);
            } else {
                return res.send(err);
            }
        });
};

//Show Material
exports.show = function(req, res) {
    var initiateevent = req.initiateevent.toObject();
    var expired = moment(initiateevent.eventdateto).isBefore();
    initiateevent["expired"] = expired;
    expired 
        ? initiateevent["status"] = 'inactive' 
        : initiateevent["status"] = 'active';
    res.jsonp(initiateevent);
};

//Update initiateevent
exports.update = function(req, res) {
    var updateInitiateEvent = req.initiateevent;
    updateInitiateEvent = _.extend(updateInitiateEvent, req.body);

    updateInitiateEvent.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateInitiateEvent: updateInitiateEvent
            });
        } else {
            res.jsonp(updateInitiateEvent);
        }
    });
};
// Create InitiateEvent
exports.create = function(req, res) {
    var request = req.body;
    var newInitiateEvent = new InitiateEvent(request);
    newInitiateEvent.creator = req.user;
    newInitiateEvent.save(function(err) {
        if (!err) {
            fmt.dump(newInitiateEvent, "Success");
            res.jsonp(newInitiateEvent);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
