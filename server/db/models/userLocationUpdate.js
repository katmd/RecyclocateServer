const Sequelize = require('sequelize')
const db = require('../db')

const UserLocationUpdate = db.define('userLocationUpdate', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  availableAtLocation: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = UserLocationUpdate
