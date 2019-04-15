const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Author = sequelize.define('Author', {
    Name: {
        type: Sequelize.STRING(100),
    },
    SecName: {
        type: Sequelize.STRING(100),
    },
    Email: {
        type: Sequelize.STRING(100),
    },
    Phone: {
        type: Sequelize.STRING(12),
    },
    Ranking: {
        type: Sequelize.INTEGER,
    },
    Price: {
        type: Sequelize.INTEGER,
    },
    Mission: {
        type: Sequelize.STRING(200),
    },
});

module.exports = Author;