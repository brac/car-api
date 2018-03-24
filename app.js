// jshint asi:true

const app = require('express')()
const routes  = require('./routes')

app.use('/', routes)

app.listen(3000, () => {
  console.log('server listening on port 3000')
})