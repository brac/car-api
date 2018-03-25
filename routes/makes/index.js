// jshint asi:true

const makes = require('express').Router()
const data   = require('../../data.json')
const cars   = require('./cars')

makes.use('/:id/cars', cars)

makes.get('/', (req, res) => {
  const makes = data.makes
  res.status(200).json({ makes })
})

makes.get('/:id', (req, res) => {
  const id = req.params.id * 1;
  const model   = data.makes.find(m => m.id === id);

  if (model == undefined) { return res.status(200).json({message: `Model id not found: ${id}`})}

  res.status(200).json({ model });
})


module.exports = makes




