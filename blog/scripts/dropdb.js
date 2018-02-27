const mongoose = require('mongoose')
const db = require('../db')

mongoose.connect(db.url)

mongoose.connection.on('error', () => {
  console.log('Failed to connect to the db.')
  process.exit(-1)
})

mongoose.connection.once('open', () => {
  process.stdout.write('Dropping db ... ')
  mongoose.connection.db.dropDatabase(() => {
    process.stdout.write('done.\n'.green)
    process.exit()
  })
})
