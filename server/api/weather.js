const router = require('express').Router()
const {Weather} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const weather = await Weather.findAll()
    console.log(weather)
    res.json(weather)
  } catch (err) {
    next(err)
  }
})
