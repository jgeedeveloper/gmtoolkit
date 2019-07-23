'use strict'

const db = require('../server/db')
const {Weather} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const weather = await Promise.all([
    Weather.create({
      timeOfYear: 'Summer',
      result1D6: 'Heavy Winds',
      result2D6: 'Very Hot',
      result3D6: 'Hot',
      result4D6: 'Warm',
      result5D6: 'Clear',
      result6D6: 'Warm with Cool Breeze'
    }),
    Weather.create({
      timeOfYear: 'Summer-Fall',
      result1D6: 'Hot',
      result2D6: 'Warm',
      result3D6: 'Clear',
      result4D6: 'Bright',
      result5D6: 'Scattered Showers',
      result6D6: 'Cloudy'
    }),
    Weather.create({
      timeOfYear: 'Fall',
      result1D6: 'Rain',
      result2D6: 'Scattered Showers',
      result3D6: 'Cloudy',
      result4D6: 'Clear and Cool',
      result5D6: 'Chilly',
      result6D6: 'Bright'
    }),
    Weather.create({
      timeOfYear: 'Fall-Winter',
      result1D6: 'Cold and Rainy',
      result2D6: 'Clear and Cool',
      result3D6: 'Cold and Windy',
      result4D6: 'Chilly and Overcast',
      result5D6: 'Hail',
      result6D6: 'Light Snowfall'
    }),
    Weather.create({
      timeOfYear: 'Winter',
      result1D6: 'Showers, some Hail',
      result2D6: 'Scattered Showers',
      result3D6: 'Snowing',
      result4D6: 'Freezing',
      result5D6: 'Cloudy and Cool',
      result6D6: 'Clear and Cool'
    }),
    Weather.create({
      timeOfYear: 'Winter-Spring',
      result1D6: 'Scattered Showers',
      result2D6: 'Snowing',
      result3D6: 'Freezing',
      result4D6: 'Heavy Rain',
      result5D6: 'Light Showers',
      result6D6: 'Cloudy'
    }),
    Weather.create({
      timeOfYear: 'Spring',
      result1D6: 'Heavy Rain',
      result2D6: 'Light Showers',
      result3D6: 'Cloudy',
      result4D6: 'Clear and Cool',
      result5D6: 'Clear and Cool',
      result6D6: 'Bright'
    }),
    Weather.create({
      timeOfYear: 'Spring-Summer',
      result1D6: 'Cloudy',
      result2D6: 'Clear and Cool',
      result3D6: 'Bright',
      result4D6: 'Windy',
      result5D6: 'Warm',
      result6D6: 'Clear'
    })
  ])

  console.log(`seeded ${weather.length} weather`)
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
