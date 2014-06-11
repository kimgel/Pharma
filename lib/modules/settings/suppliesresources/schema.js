'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var SuppliesResourceSchema = new Schema({
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
    qtyonhand: {
        type: Number,
        default: null
    },  
    qtyreserved: {
        type: Number,
        default: null
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

SuppliesResourceSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'name cannot be blank');

SuppliesResourceSchema
    .path('description')
    .validate(function(description) {
        return description.length;
    }, 'description cannot be blank');

/*
SuppliesResourceSchema
    .path('qtyonhand')
    .validate(function(qtyonhand) {
        return qtyonhand.length;
    }, 'qtyonhand cannot be blank');

SuppliesResourceSchema
    .path('qtyreserved')
    .validate(function(qtyreserved) {
        return qtyreserved.length;
    }, 'qtyreserved cannot be blank');
*/
SuppliesResourceSchema.statics.load = function(id, cb) {
    var opts = [{
            path: 'creator',
            select: 'name'
        },{
            path: 'modified_by',
            select: 'name'
        }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var SuppliesResource = mongoose.model('SuppliesResource', SuppliesResourceSchema);

module.exports = {
    SuppliesResource:SuppliesResource
};
