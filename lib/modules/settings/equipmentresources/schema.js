'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var EquipmentResourceSchema = new Schema({
    serial: {
        type: String,
        default: '',
        trim: true
    },

    name: { 
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        default: '',
        trim: true
    },
    location: {
        type: String,
        default: '',
        trim: true
    },
    assigned_events: {
        type: Schema.Types.Mixed,
        default: []
    },
    /*
    reservedatefrom: {
        type: Date,
        default: null
    },
    reservedateto: {
        type: Date,
        default: null
    },
    assigndatefrom: {
        type: Date,
        default: null
    },
    assigndateto: {
        type: Date,
        default: null
    },*/
    status: {
        type: String,
        default: 'Available',
        trim: true
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

EquipmentResourceSchema
    .path('serial')
    .validate(function(serial) {
        return serial.length;
    }, 'serial cannot be blank');

EquipmentResourceSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'name cannot be blank');

EquipmentResourceSchema
    .path('description')
    .validate(function(description) {
        return description.length;
    }, 'description cannot be blank');
/*
EquipmentResourceSchema
    .path('status')
    .validate(function(status) {
        return status.length;
    }, 'status cannot be blank');
*/

EquipmentResourceSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var EquipmentResource = mongoose.model('EquipmentResource', EquipmentResourceSchema);

module.exports = {
    EquipmentResource: EquipmentResource
};
