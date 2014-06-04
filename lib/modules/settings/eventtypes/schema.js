'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var EventtypeSchema = new Schema({
    no: {
        type: String,
        default: '',
        trim: true
    },
    name: {
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

//Async validations
EventtypeSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Eventtype no. cannot be blank');

EventtypeSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Eventtype name cannot be blank');


EventtypeSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var Eventtype = mongoose.model('Eventtype', EventtypeSchema);

module.exports = {
    Eventtype: Eventtype
};
