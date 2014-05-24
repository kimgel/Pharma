'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var HumanResourceSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    address: {
        type: String,
        default: '',
        trim: true
    },
    contact: {
        type: String,
        default: '',
        trim: true
    },
    location: {
        type: String,
        default: '',
        trim: true
    },
    details: {
        type: String,
        default: '',
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

HumanResourceSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Name cannot be blank');

HumanResourceSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Address cannot be blank');

HumanResourceSchema
    .path('contact')
    .validate(function(contact) {
        return contact.length;
    }, 'Contact cannot be blank');
HumanResourceSchema
    .path('location')
    .validate(function(contact) {
        return contact.length;
    }, 'Location cannot be blank');
HumanResourceSchema
    .path('details')
    .validate(function(contact) {
        return contact.length;
    }, 'Details cannot be blank');

HumanResourceSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var HumanResource = mongoose.model('HumanResource', HumanResourceSchema);

module.exports = {
    HumanResource: HumanResource
};
