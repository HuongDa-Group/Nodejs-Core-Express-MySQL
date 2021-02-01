const express = require('express');
const bodyParser = require('body-parser');
const {Liquid} = require('liquidjs');
const cors = require('cors');
const webRoute = require('../routes/Web');
const fileManagerRoute = require('../routes/FileManager');
const StaticRoute = require('../routes/Static');
const i18next = require('./i18next');

module.exports = () => {
    const app = express();
    const engine = new Liquid();
    app.use(i18next);
    app.use(express.json({
        limit: '228mb',
        extended: true
    }));
    app.use(
        cors({
            origin: process.env.CORS.split('|'),
            optionsSuccessStatus: 200,
        })
    );
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.engine('liquid', engine.express());
    app.set('views', './resource/views');
    app.set('view engine', 'liquid');

    app.use('/web', webRoute);
    app.use('/file-manager', fileManagerRoute);
    app.use('/static', StaticRoute);

    app.use((err, req, res, next) => {
        if (!err.expose) {
            console.error(err);
            res.status(500).json(helper.APIReturn(10, "Somthing errors."));
        } else {
            const status = err.statusCode || err.status || 500;
            return res.status(status).json(err.errors);
        }
    });
    app.use(async (req, res, next) => {
        res.status(404).json(helper.APIReturn(-1, "Not found"));
        next();
    });
    app.on('error', (err, req, res) => {
        if (process.env.DEBUG === 'true') {
            console.error('==================================');
            console.error(err.message);
            console.error(err.errors);
        }
    });
    return app;
}
