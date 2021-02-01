// const Storage = require('./Storage/index')

module.exports.APIReturn = function (code = 0, data = {}, mess = "") {
    if (code === 503) {
        code = 10;
        if (mess !== "")
            mess = "Miss fiend"
    }
    if (typeof data === 'string') {
        mess = data;
        data = {};
    }
    if (process.env.DEBUG === 'true')
        mess = '';
    return {
        code, data, mess
    }
};

// module.exports.storage = Storage;