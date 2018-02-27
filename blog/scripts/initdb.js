const mongoose = require('mongoose')
const fixtures = require('pow-mongoose-fixtures')
const db = require('../db')

// / Connect to mongodb and init the db
mongoose.connect(db.url)

mongoose.connection.on('error', () => {
  console.log('Failed to connect to the db.')
  process.exit(-1)
})

mongoose.connection.once('open', () => {
  process.stdout.write('Loading fixtures ... ')
  fixtures.load(`${__dirname}/fixtures.js`, mongoose, err => {
    process.stdout.write('done.\n'.green)
    process.exit()
  })
})
