'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var InitiateEventSchema = new Schema({
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
    eventtype: {
        type: Schema.ObjectId,
        ref: 'Eventtype'
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
/*
    schedule: {
        type: Schema.Types.Mixed,
        default: []
    },*/
    reserved_supplies: {
        type: Schema.Types.Mixed,
        default: []
    },
    purchased_supplies: {
        type: Schema.Types.Mixed,
        default: []
    },

    status: {
        type: String,
        default: 'active'
    },
    approvalStatus: {
        type: String,
        default: 'Waiting'
    },
    approvalRemarks: {
        type: String,
        default: ''
    },
    approvalDate: {
        type: Date,
        default: null
    },
    approver: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    modified_by: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

InitiateEventSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'name cannot be blank');
InitiateEventSchema
    .path('eventlocation')
    .validate(function(eventlocation) {
        return eventlocation.length;
    }, 'eventlocation cannot be blank');

InitiateEventSchema
    .path('eventdescription')
    .validate(function(eventdescription) {
        return eventdescription.length;
    }, 'eventdescription cannot be blank');
InitiateEventSchema
    .path('eventpurpose')
    .validate(function(eventpurpose) {
        return eventpurpose.length;
    }, 'eventpurpose cannot be blank');


InitiateEventSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'eventtype'
    }, {
        path: 'approver',
        select: 'name'
    },{
        path: 'modified_by',
        select: 'name'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};


var InitiateEvent = mongoose.model('InitiateEvent', InitiateEventSchema);

module.exports = {
    InitiateEvent: InitiateEvent
};
