const User = require('./user')
const Service = require('./service')
const Location = require('./location')
const UserLocationUpdate = require('./userLocationUpdate')

/* set associations */
// N:M - User:Service
User.belongsToMany(Service, {
  through: {model: UserLocationUpdate, unique: false},
  constraints: false
})
Service.hasMany(User, {
  through: {model: UserLocationUpdate, unique: false},
  constraints: false
})

// 1:M Location:UserLocationUpdate
Location.hasMany(UserLocationUpdate)
UserLocationUpdate.belongsTo(Location)

// 1:M Location:OverallService
Location.hasMany(Service, {as: 'OverallServices'})

module.exports = {
  User,
  Service,
  Location,
  UserLocationUpdate
}
