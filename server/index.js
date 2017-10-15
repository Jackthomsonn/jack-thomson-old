const Express = require('express')
const app = new Express()
const application = require('./setup')

application.instantiateApplicationDefaults(app);

application.setupApi(app)

application.start(app)