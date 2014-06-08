'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),
    EventMain = require('./schema').EventMain;


// Find EventMain by id
exports.eventmain = function(req, res, next, id) {
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
        EventMain.findOne({ 'no': id })
            .sort('-created')
            .populate(opts)
            .exec(function(err, eventmains) {
                if (!err) {
                    if(eventmains){
                        res.jsonp(eventmains);
                    } else {                        
                        return next(new Error('EventMain not found.'));
                    }
                    
                } else {
                    return res.send(err);
                }
            });


    } else {
        EventMain.load(id, function(err, eventmain) {
            if (err) return next(err);
            if (!eventmain) return next(new Error('Failed to load EventMain: ' + id));
            req.eventmain = eventmain;
            next();
        });
    }

};


//List all Material
exports.all = function(req, res) {
    var query = req.query.kim,
        columns = '';
    if(query){
        columns = query;
    }
    var opts = [{
        path: 'eventtype',
        select: 'name'
    }];
    EventMain.find()
        .sort('-created')
        .populate(opts)
        .select(columns)
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
    res.jsonp(eventmain);
};

//Update EventMain
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
// Create EventMain
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
