//jshint asi:true

const cars = require('express').Router({ mergeParams: true })
const data = require('../../../data.json')

cars.get('/', (req, res) => {
  if (req.params.id == undefined) {
    const cars = data.cars
    res.status(200).json({ cars })
  } else {
    const cars = data.cars.filter(c => c.makeId == req.params.id)
    res.status(200).json(cars)
  }
})

module.exports = cars