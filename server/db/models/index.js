const User = require('./user')
const Service = require('./service')
const Location = require('./location')
const UserLocationUpdate = require('./userLocationUpdate')
const LocationService = require('./locationService')
const UserRating = require('./userRating')

/* set associations */
// N:M - User:Service
User.belongsToMany(Service, {
  through: {model: UserLocationUpdate, unique: false},
  constraints: false
})
Service.belongsToMany(User, {
  through: {model: UserLocationUpdate, unique: false},
  constraints: false
})

// 1:M Location:UserLocationUpdate
Location.hasMany(UserLocationUpdate)
UserLocationUpdate.belongsTo(Location)

// N:M Location:OverallService
Location.belongsToMany(Service, {
  through: {model: LocationService, unique: false},
  constraints: false
})
Service.belongsToMany(Location, {
  as: 'overallService',
  through: {model: LocationService, unique: false},
  foreignKey: 'overallServiceId'
})

// 1:N:M UserRating:User:Location
UserRating.belongsTo(User)
UserRating.belongsTo(Location)
User.hasMany(UserRating)
Location.hasMany(UserRating)

module.exports = {
  User,
  Service,
  Location,
  UserLocationUpdate,
  LocationService,
  UserRating
}
