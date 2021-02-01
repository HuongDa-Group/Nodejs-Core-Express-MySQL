const sequelize = require('sequelize');

let _sequelize;

const connectDB = async () => {
    try {
        _sequelize = new sequelize.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            port: parseInt(process.env.DB_PORT)
        });
        console.log('Connect to ', process.env.DB_NAME);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports.connectDB = connectDB;
module.exports.sequelize = _sequelize;