const Sequelize = require('sequelize')
const db = require('../db')

const UserRating = db.define('userRating', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = UserRating
