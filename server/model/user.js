const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    description: {type: String}
});

userSchema.index({name: 1});

module.exports = mongoose.model('User', userSchema);