const socket = require('socket.io');
const router = require('../routers/socket');

module.exports.initSocket = function (_io) {
    global.io = socket(_io);
    global.io.set('origins', '*:*');
    router.routeSocket(global.io)
}

module.exports.emit = function (id, event, data, path = null) {
    try {
        if (!io.sockets.sockets[id])
            return false;
        if (path)
            io.of(path).emit(event, data)
        else
            io.emit(event, data)
        return true;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
