const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let pageSchema = new Schema({
    author: {
        name: {type: String, required: true},
        email: {type: String, required: true}
    },
    title: { type: String, required: true},
    content: { type: String, required: true},
    pv: {type: Number, default: 0},
    comment: {type: Number, default: 0},
    created_time: {type: Date, default: Date.now},
    updated_time: {type: Date, default: Date.now}
});

pageSchema.index({created_time: -1});
module.exports = mongoose.model('Page', pageSchema);