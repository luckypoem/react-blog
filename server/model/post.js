const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {type: String, required: true},
    title: { type: String, required: true},
    content: { type: String, required: true},
    tag: {type: String},
    class: {type: String},
    pv: {type: Number, default: 0},
    comment: {type: Number, default: 0},
    created_time: {type: Date, default: Date.now},
    updated_time: {type: Date, default: Date.now}
});

postSchema.index({created_time: -1});
module.exports = mongoose.model('Post', postSchema);