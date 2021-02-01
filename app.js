require('dotenv').config()
const http = require('http')
const app = require('./config/express')();
const mysql = require('./config/mysql');
// const socket = require('./config/socket');
const helper = require('./app/Helper');

global.helper = helper;

const startApiServer = async app => {
    try {
        const server = http.createServer(app)
        await server.listen(process.env.PORT || 2208);
        server.on('error', (e) => {
            throw e;
        });
        server.on('listening', () => {
            console.log(`⚡️[server]: Server is running at ${process.env.URL}`);
            // socket.initSocket(server);
        })
    } catch (error) {
        throw error;
    }
};

const start = async app => {
    try {
        await startApiServer(app);
        await mysql.connectDB();
        console.log('[MONGODB] connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

(async () => {
    await start(app);
})();
