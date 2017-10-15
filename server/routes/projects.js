const express = require('express')
const router = express.Router()
const Projects = require('../models/project/project.model')
const imageHandler = require('../handler/image.handler')
const authenticationHandler = require('../handler/authentication.handler')

Projects.methods(['get', 'post', 'put', 'delete'])
  .before('post', [authenticationHandler.checkAuthentication, imageHandler])
  .before('delete', [authenticationHandler.checkAuthentication])
  .before('put', [authenticationHandler.checkAuthentication])

Projects.register(router, '/projects')

module.exports = router