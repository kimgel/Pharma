'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var ParentEventSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    events: {
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

//Async validations
ParentEventSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'ParentEvent name cannot be blank');


ParentEventSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var Parentevent = mongoose.model('Parentevent', ParentEventSchema);

module.exports = {
    Parentevent: Parentevent
};
