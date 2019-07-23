const Sequelize = require('sequelize')
const db = require('../db')

const Weather = db.define('weather', {
  timeOfYear: {
    type: Sequelize.STRING
  },
  result1D6: {
    type: Sequelize.STRING
  },
  result2D6: {
    type: Sequelize.STRING
  },
  result3D6: {
    type: Sequelize.STRING
  },
  result4D6: {
    type: Sequelize.STRING
  },
  result5D6: {
    type: Sequelize.STRING
  },
  result6D6: {
    type: Sequelize.STRING
  }
})

module.exports = Weather
