'use strict'

const db = require('../server/db')
const {
  User,
  Location,
  LocationService,
  Service,
  UserLocationUpdate,
  UserRating
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.bulkCreate([
      {
        username: 'treehugger',
        email: 'lovelife@email.com',
        password: '12345'
      },
      {
        username: 'flutterguy',
        email: 'shyguy@email.com',
        password: 'YouWillLoveMe'
      },
      {
        username: 'cyclonaut',
        email: 'spaceman@email.com',
        password: 'Blackhole5'
      },
      {
        username: 'johnnyboy',
        email: 'johnny_boy@email.com',
        password: 'qwerty'
      },
      {
        username: 'jane_doe',
        email: 'manelane@email.com',
        password: 'SupahTroopah'
      }
    ])
  ])

  const locations = await Promise.all([
    Location.bulkCreate([
      {
        latitude: 40.735073,
        longitude: -74.039156,
        overallRating: 4.5
      },
      {
        latitude: 40.745073,
        longitude: -74.049156
      },
      {
        latitude: 40.755073,
        longitude: -74.059156
      },
      {
        latitude: 40.765073,
        longitude: -74.069156
      },
      {
        latitude: 40.775073,
        longitude: -74.079156
      }
    ])
  ])

  const services = await Promise.all([
    Service.bulkCreate([
      {
        category: 'Cans'
      },
      {
        category: 'Paper'
      },
      {
        category: 'Cardboard'
      },
      {
        category: 'Glass'
      },
      {
        category: 'Plastic Bags'
      },
      {
        category: 'Hard Plastic'
      },
      {
        category: 'Organics'
      },
      {
        category: 'Batteries'
      },
      {
        category: 'Electronics'
      },
      {
        category: 'Scrap Metal'
      }
    ])
  ])

  const userRatings = await Promise.all([
    UserRating.bulkCreate([
      {
        userId: 1,
        locationId: 1,
        rating: 5
      },
      {
        userId: 2,
        locationId: 1,
        rating: 4
      }
    ])
  ])

  const userLocationUpdates = await Promise.all([
    UserLocationUpdate.bulkCreate([
      {
        userId: 1,
        serviceId: 1,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 1,
        serviceId: 2,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 1,
        serviceId: 3,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 1,
        serviceId: 4,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 5,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 6,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 7,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 8,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 9,
        locationId: 1
      },
      {
        userId: 1,
        serviceId: 10,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 1,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 2,
        serviceId: 2,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 2,
        serviceId: 3,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 2,
        serviceId: 4,
        locationId: 1,
        availableAtLocation: true
      },
      {
        userId: 2,
        serviceId: 5,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 6,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 7,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 8,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 9,
        locationId: 1
      },
      {
        userId: 2,
        serviceId: 10,
        locationId: 1
      }
    ])
  ])

  const locationServices = await Promise.all([
    LocationService.bulkCreate([
      {
        locationId: 1,
        overallServiceId: 1,
        availableAtLocation: true
      },
      {
        locationId: 1,
        overallServiceId: 2,
        availableAtLocation: true
      },
      {
        locationId: 1,
        overallServiceId: 3,
        availableAtLocation: true
      },
      {
        locationId: 1,
        overallServiceId: 4
      },
      {
        locationId: 1,
        overallServiceId: 5
      },
      {
        locationId: 1,
        overallServiceId: 6
      },
      {
        locationId: 1,
        overallServiceId: 7
      },
      {
        locationId: 1,
        overallServiceId: 8
      },
      {
        locationId: 1,
        overallServiceId: 9
      },
      {
        locationId: 1,
        overallServiceId: 10
      }
    ])
  ])

  console.log(
    `seeded ${users[0].length} users, ${locations[0].length} locations, ${
      services[0].length
    } services, ${userLocationUpdates[0].length} user location updates, ${
      locationServices[0].length
    } location services, and ${userRatings[0].length} user ratings`
  )
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
