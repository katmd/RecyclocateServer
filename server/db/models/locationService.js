const Sequelize = require('sequelize')
const db = require('../db')

const LocationService = db.define('locationService', {
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

module.exports = LocationService
