const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Photo = sequelize.define('Photo', {
    Path: {
        type: Sequelize.STRING(1000),
    },
    Height: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Photo;