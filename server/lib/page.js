const page = require('../model').Page;

exports.addPage = function (data) {
    return page.create(data);
};

exports.getPageById = function (id) {
    return page.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};

exports.getPagesList = function (p) {
    let query = {};
    return page.find(query).skip((p - 1) * 10).sort('-updated_time').limit(10).select('-content').exec();
};