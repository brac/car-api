// jshint asi:true

const routes = require('express').Router()
const makes = require('./makes')
const cars = require('./cars')

routes.use('/makes', makes)
routes.use('/cars', cars)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'You are connected! '})
})

module.exports = routes