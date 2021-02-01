const sequelize = require('sequelize');
const _sequelize = require('../../config/mysql');

const schema = _sequelize.sequelize.define('user', {
    id: {
        type: sequelize.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    phone: {
        type: sequelize.Sequelize.STRING,
        unique: true
    },
    address_number: {
        type: sequelize.Sequelize.STRING,
        default: null
    },
    address_ward: {
        type: sequelize.Sequelize.STRING,
        default: null
    },
    address_district: {
        type: sequelize.Sequelize.STRING,
        default: null
    },
    address_province: {
        type: sequelize.Sequelize.STRING,
        default: null
    },
    id_number: {
        type: sequelize.Sequelize.STRING,
        default: null
    },
    birthday: {
        type: sequelize.Sequelize.DATE,
        default: null
    },
    email: {
        type: sequelize.Sequelize.DATE,
        default: null
    }
});

module.exports = schema;