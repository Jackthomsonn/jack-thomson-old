const Express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const env = require('./env')

const application = {
  instantiateApplicationDefaults: (app) => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://' + env.MONGOURI + '/jack-thomson', { useMongoClient: true })

    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
    app.use(cors())

    app.use(Express.static(path.join(__dirname, '..', 'dist')))
  },
  setupApi: (app) => {
    app.use('/api', require('./routes/projects'))
    app.use('/auth', require('./routes/auth'))
    app.use('/uploads', require('./routes/uploads'))
    app.use('*', require('./routes/app'))
  },
  start: (app) => {
    app.listen(env.PORT)
  }
}

module.exports = application