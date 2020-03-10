const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
  latitude: {
    type: Sequelize.FLOAT(10, 6),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  longitude: {
    type: Sequelize.FLOAT(10, 6),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  overallRating: {
    type: Sequelize.DECIMAL,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Location
