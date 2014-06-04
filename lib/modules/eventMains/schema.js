'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var EventMainSchema = new Schema({
    eventnum: {
        type: String,
        default: '',
        trim: true
    },

    name: { 
        type: String,
        default: '',
        trim: true
    },
    /*eventtype: {
        type: String,
        default: '',
        trim: true
    },*/
    eventtypes: {
        type: Schema.ObjectId,
        ref: 'Eventtypes'
    },
    eventlocation: {
        type: String,
        default: '',
        trim: true
    },
    eventdescription: {
        type: String,
        default: '',
        trim: true
    },
    eventpurpose: {
        type: String,
        default: '',
        trim: true
    },
    
    eventdatefrom: {
        type: Date,
        default: null
    },
    eventdateto: {
        type: Date,
        default: null
    },
    eventtime: {
        type: String,
        default: '',
        trim: true
    },
    hresource: {
        type: String,
        default: '',
        trim: true
    },
    eresource: {
        type: String,
        default: '',
        trim: true
    },
    sresource: {
        type: String,
        default: '',
        trim: true
    },
    eventremarks: {
        type: String,
        default: '',
        trim: true
    },

    schedule: {
        type: Schema.Types.Mixed,
        default: []
    },

    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

/*
EquipmentResourceSchema.pre('save', function(next) {
    var x = moment(this.assigndateto).isBefore();
    if (!x) {
        this.status = 'on going';
    } else {
        this.status = 'delayed';
    }
    next();
});*/

EventMainSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'name cannot be blank');
/*
EventtSchema
    .path('eventtype')
    .validate(function(eventtype) {
        return eventtype.length;
    }, 'eventtype cannot be blank');
*/
EventMainSchema
    .path('eventlocation')
    .validate(function(eventlocation) {
        return eventlocation.length;
    }, 'eventlocation cannot be blank');

EventMainSchema
    .path('eventdescription')
    .validate(function(eventdescription) {
        return eventdescription.length;
    }, 'eventdescription cannot be blank');
EventMainSchema
    .path('eventpurpose')
    .validate(function(eventpurpose) {
        return eventpurpose.length;
    }, 'eventpurpose cannot be blank');
/*
EventtSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var Eventt = mongoose.model('Eventt', EventtSchema);

module.exports = {
    Eventt: Eventt
};*/

EventMainSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'eventtypes'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var EventMain = mongoose.model('EventMain', EventMainSchema);

module.exports = {
    EventMain: EventMain
};