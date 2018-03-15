const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user/user.model')
const authenticationHandler = require('../handler/authentication.handler')
const env = require('../env')

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(500).send({
        dev_message: 'internal server error',
        user_message: 'An internal server error was found',
        status: 500
      })
    }
    if (!user) {
      res.status(404).send({
        dev_message: 'auth error',
        user_message: 'User not found, please make sure both your username and password are correct',
        status: 404
      })
    }
    if (user) {
      user.comparePassword(password, (err, isMatch) => {
        if (isMatch) {
          res.cookie('auth-jack-thomson', authenticationHandler.signToken(user), {
            maxAge: 3600000
          })
          res.status(200).send()

          if (env.NODE_ENV === 'development') {
            console.log(`Token is: ${authenticationHandler.signToken(user)}`)
          }
        } else {
          res.status(404).send({
            dev_message: 'wrong password',
            user_message: 'Please make sure your password is correct',
            status: 404
          })
        }
      })
    }
  })
})

router.get('/checktoken', authenticationHandler.checkAuthentication)

module.exports = router