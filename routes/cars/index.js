// jshint asi:true

const cars       = require('express').Router()
const carsRoutes = require('../makes/cars')

cars.use('/', carsRoutes)
cars.use('/:id', carsRoutes)

module.exports = cars