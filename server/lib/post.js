const post = require('../model').Post;

exports.addPost = function (data) {
    return post.create(data);
};

exports.getPostById = function (id) {
    return post.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};

exports.getPostByName = function (name) {
    return post.findOneAndUpdate({title: name}, {$inc: {pv: 1}}).exec();
};

exports.getPostsList = function (p) {
    return post.find({}).skip((p - 1) * 10).sort({'updated_time': -1}).limit(10).exec();
};

exports.getPostsByClass = function (Class) {
    return post.find({'class': Class}).sort('-updated_time').exec();
};

exports.getAllPost = function () {
    return post.find({}).exec();
};