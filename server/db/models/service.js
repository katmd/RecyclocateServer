const Sequelize = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  category: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  imageIcon: {
    type: Sequelize.STRING,
    defaultValue: '/images/recycling-symbol.png'
  },
  availableAtLocation: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Service;
