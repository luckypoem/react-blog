const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/blog', (err)=>{
    if(err) {
        console.error(err);
        process.exit(1);
    }
});

exports.Post = require('./post');
exports.Page = require('./page');
exports.User = require('./user');