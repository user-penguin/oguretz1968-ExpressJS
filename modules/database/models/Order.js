const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Order = sequelize.define('Order', {
    Name: {
        type: Sequelize.STRING(100),
    },
    SecName: {
        type: Sequelize.STRING(100),
    },
    ThirdName: {
        type: Sequelize.STRING(100),
    },
    Sex: {
        type: Sequelize.STRING(10),
    },
    Phone: {
        type: Sequelize.STRING(12),
    },
});

module.exports = Order;